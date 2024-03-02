import LandingPage from "./LandingPage";
import Home from "./Home";
export default function Centrebar({ children, props }) {
  // if (props && props.component == 'dashboard') {
  // console.log('centerbar', props);
  // }
  return (
    <div className="flex h-full flex-col items-center">
      {props && props.component == "landing" && (
        <>
          <LandingPage props={props}>{children}</LandingPage>
        </>
      )}
      {props && props.component == "home" && (
        <>
          <Home props={props}>{children}</Home>
        </>
      )}
    </div>
  );
}
