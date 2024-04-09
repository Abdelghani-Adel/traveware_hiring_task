import AppProviders from "@/app/_provider/AppProviders";
import { render } from "@testing-library/react";

const renderWithProviders = (component: React.ReactElement) => {
  return render(<AppProviders>{component}</AppProviders>);
};

const reduxWrapper = ({ children }: { children: React.ReactNode }) => (
  <AppProviders>{children}</AppProviders>
);

const mockFetch = () => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => {},
    })
  );
};

export { renderWithProviders, mockFetch, reduxWrapper };
