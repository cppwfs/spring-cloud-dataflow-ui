import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecurityServiceMock} from '../../../tests/api/security.service.mock';
import {AboutServiceMock} from '../../../tests/api/about.service.mock';
import {StreamServiceMock} from '../../../tests/api/stream.service.mock';
import {TaskServiceMock} from '../../../tests/api/task.service.mock';
import {NotificationServiceMock} from '../../../tests/service/notification.service.mock';
import {ImportExportServiceMock} from '../../../tests/service/import-export.service.mock';
import {StreamImportComponent} from './import.component';
import {throwError} from 'rxjs';
import {ContextServiceMock} from '../../../tests/service/context.service.mock';
import {TranslateTestingModule} from 'ngx-translate-testing';
import TRANSLATIONS from '../../../../assets/i18n/en.json';

describe('manage/tools/stream/import.component.ts', () => {
  let component: StreamImportComponent;
  let fixture: ComponentFixture<StreamImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StreamImportComponent],
      imports: [
        FormsModule,
        ClarityModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
        TranslateTestingModule.withTranslations('en', TRANSLATIONS)
      ],
      providers: [
        SecurityServiceMock.provider,
        AboutServiceMock.provider,
        StreamServiceMock.provider,
        TaskServiceMock.provider,
        NotificationServiceMock.provider,
        ImportExportServiceMock.provider,
        ContextServiceMock.provider
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamImportComponent);
    component = fixture.componentInstance;
    NotificationServiceMock.mock.clearAll();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should run a stream import', async () => {
    fixture.detectChanges();
    component.open();
    component.fileChanged({target: {files: ['foo']}});
    component.run();
    fixture.detectChanges();
    expect(component.view).toBe('result');
  });

  it('should handle empty file and error', async () => {
    spyOn(ImportExportServiceMock.mock, 'streamsImport').and.callFake(() => throwError(new Error('Fake error')));
    fixture.detectChanges();
    component.open();
    component.fileChanged('foo');
    component.run();
    fixture.detectChanges();
    expect(component.view).toBe('file');
    expect(NotificationServiceMock.mock.errorNotification[0].title).toBe('Invalid file');
    expect(NotificationServiceMock.mock.errorNotification[0].message).toBe('Please, select a file.');
    component.fileChanged({target: {files: ['foo']}});
    fixture.detectChanges();
    component.run();
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(NotificationServiceMock.mock.errorNotification[1].title).toBe('Invalid file');
    expect(NotificationServiceMock.mock.errorNotification[1].message).toBe('The file is not valid.');
  });
});
