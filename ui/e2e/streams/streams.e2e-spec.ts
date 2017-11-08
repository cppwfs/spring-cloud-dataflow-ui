import { StreamsPage } from './streams.po';

/**
 * E2E spec for streams page.
 *
 * @author Glenn Renfro
 */
describe('E2E spec for streams page', () => {
  let page: StreamsPage;

  beforeEach(() => {
    page = new StreamsPage();
  });

  it('should display streams title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Streams');
  });
});
