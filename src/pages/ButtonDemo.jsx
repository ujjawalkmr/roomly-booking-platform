import Button from "../components/Button";

export default function ButtonDemo() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="mb-8 text-3xl font-bold">
        clsx + tailwind-merge Demo
      </h1>

      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>

        <Button variant="success">
          Success
        </Button>

        <Button variant="danger">
          Delete
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button size="sm">
          Small
        </Button>

        <Button size="lg">
          Large
        </Button>

        <Button disabled>
          Disabled
        </Button>

        <Button className="bg-purple-600">
          Custom Color
        </Button>
      </div>
    </div>
  );
}