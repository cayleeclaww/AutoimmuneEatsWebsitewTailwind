//props will eventually be ArticleTest.voteCount

export default function VoteUpButton(props) {
  return (
    // <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
    <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
      <div class="arrow-container">
        <span class="up-arrow"></span>
        <p className="mx-3">vote up</p>
        <span class="up-arrow"></span>
      </div>
    </button>
    // </div>
  );
}
