import LandingPage from "./LandingPage";

export default function Centrebar({ children, props }) {
  // if (props && props.component == 'dashboard') {
  // console.log('centerbar', props);
  // }
  return (
    <div className="flex h-full flex-col items-center">
      {props && props.component == 'home' && (
        <>
          <LandingPage props={props}>{children}</LandingPage>
        </>
      )}
    </div>
  );
}
