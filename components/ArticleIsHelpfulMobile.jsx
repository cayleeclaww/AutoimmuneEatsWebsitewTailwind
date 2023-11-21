import VoteUpButton from "./VoteUpButton";

export default function ArticleIsHelpfulMobile() {
  return (
    <div className="grid place-items-center py-24 md:hidden">
      <p className="text-xl">Is this article helpful?</p>
      <VoteUpButton></VoteUpButton>
    </div>
  );
}