import { Form } from "@/components/form";
import { List } from "@/components/list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <Form />
      <List />
    </main>
  );
}
