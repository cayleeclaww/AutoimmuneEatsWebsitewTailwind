import VoteUpButton from "./VoteUpButton";

export default function ArticleIsHelpful() {
  return (
    <div className="grid place-content-center">
      <p className="text-xl">Is this article helpful?</p>
      <VoteUpButton></VoteUpButton>
    </div>
  );
}
