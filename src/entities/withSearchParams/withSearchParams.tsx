import { useSearchParams } from "react-router-dom";

type ComponentProps = {
  router: { searchParams: URLSearchParams };
};

type Props = {
  [key: string]: any;
};

export default function withSearchParams(
  Component: React.ComponentType<ComponentProps>
) {
  return function ComponentWithSearchParams(props: Props) {
    const [searchParams] = useSearchParams();

    return <Component {...props} router={{ searchParams }} />;
  };
}
