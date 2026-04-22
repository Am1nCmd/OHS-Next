import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="container-page text-center max-w-xl mx-auto">
        <div className="font-display text-7xl md:text-9xl text-primary">
          404
        </div>
        <h1 className="mt-4 text-2xl md:text-3xl">This page has moved on.</h1>
        <p className="mt-4 text-muted">
          The link you followed may be outdated. Head back home or reach out and we'll point you in the right direction.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
