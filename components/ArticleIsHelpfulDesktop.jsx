import VoteUpButton from "./VoteUpButton";

export default function ArticleIsHelpfulDesktop() {
  return (
    <div className="place-content-center">
      <div className="grid place-items-center">
        <p className="text-xl">Is this article helpful?</p>
        <VoteUpButton></VoteUpButton>
      </div>
    </div>
  );
}
