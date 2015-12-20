import FeedItem from 'components/FeedItem'
const TestUtils = React.addons.TestUtils

describe('<FeedItem />', () => {
  it('should display info', () => {
    const author = {
      _id: '1',
      emails: [{ address: 'test@example.com', verified: true }]
    }
    const post = {
      createdAt: +new Date(),
      text: 'Hello!'
    }

    const root = TestUtils.renderIntoDocument(
      <FeedItem
        author={ author }
        createdAt={ post.createdAt }
        text={ post.text }
      />
    )

    console.log(root)

    const textEl = TestUtils.findRenderedDOMComponentWithClass(root, 'sup');

    expect(textEl.innerText).toContain('Hello');
  })
})
