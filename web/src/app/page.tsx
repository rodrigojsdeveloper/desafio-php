import { Form } from "@/components/form";
import { List } from "@/components/list";
import { Search } from "@/components/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Form />
      <div className="flex w-full flex-col gap-4 max-w-[600px]">
        <Search />
        <List />
      </div>
    </main>
  );
}
