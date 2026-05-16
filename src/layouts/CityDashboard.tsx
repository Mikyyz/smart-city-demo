import { BorderBox } from "../components/BorderBox";
import { Container } from "../components/Container";

export const CityDashboard = () => {
  return (
    <Container>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateRows: "minmax(0, 1fr) 84px",
          gap: 16,
        }}
      >
        <BorderBox height={220} width={440} title="城市运行指数" />
      </div>
    </Container>
  );
};
