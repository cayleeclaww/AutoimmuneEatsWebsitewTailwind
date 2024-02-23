import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-gray-300 py-10 md:py-24 place-items-center grid">
      <div className="grid content-center text-center gap-4 pb-0 text-sm w-1/2">
        <p>
          <Link href="/Privacy-Policy">Privacy Policy</Link> |{" "}
          <Link href="/Terms-of-Use">Terms of Use</Link> |{" "}
          <Link href="/Cookie-Policy">Cookie Policy</Link>
        </p>
        <p>
          &copy; 2024 Eat Your Veggies Nutrition PLLC. All rights reserved. Our
          website services, content, and products are for informational purposes
          only. Content provided on this website does not constitute medical advice,
          diagnosis, or treatment. See additional information in Terms of Use.
        </p>
      </div>
    </div>
  );
}
