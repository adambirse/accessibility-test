import { Helmet } from "react-helmet";

import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { Modal } from "../components/Modal/Modal";
import useModal from "../components/Modal/useModal";

export default function Page() {
  const { toggle, visible } = useModal();

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Accessible components</title>
      </Helmet>
      <main>
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
        <button onClick={toggle}>Show Modal</button>
        <Modal visible={visible} toggle={toggle}>
          {" "}
          <h2>An example modal</h2>
          <p>Something about my modal goes here.</p>
        </Modal>
      </main>
    </>
  );
}
