import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export default function Page() {
  return (
    <>
      <h1>Accessible components</h1>
      <Breadcrumb
        links={[
          {
            label: "Link 1",
            href: "",
          },
          {
            label: "Link 2",
            href: "",
          },
          {
            label: "Link 3",
            href: "",
          },
        ]}
      />
    </>
  );
}
