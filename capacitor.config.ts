import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "pl-test",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  server: {
    androidScheme: "https",
    iosScheme: "ionic",
    cleartext: true,
    allowNavigation: ["*"],
  },
};

export default config;
