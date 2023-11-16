
export default function VoteUpButton(props) {
  //props will eventually be ArticleTest.voteCount
  return (
    <div className="w-full flex justify-center md:justify-end md:w-4/5 md:-mt-8">
      <button className="text-lg p-2 m-2 bg-turquoise rounded-md grid">
        <div class="arrow-container-two">
          <span class="up-arrow-two"></span>
          <p className="mx-3">vote up</p>
          <span class="up-arrow-two"></span>
        </div>
      </button>
    </div>
  );
}