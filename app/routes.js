import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("neoledger/privacy", "routes/neoledger-privacy.jsx"),
  route("keepy/privacy", "routes/keepy-privacy.jsx"),
];
