import PageTransition from "../utils/PageTransition";

function PageWrapper({ children }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}

export default PageWrapper;