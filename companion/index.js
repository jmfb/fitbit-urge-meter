// Companion component (phone-side) - minimal stub.
// All logic runs on-device.
import { me } from "companion";

if (me.launchReasons.peerAppLaunched) {
  console.log("Urge Meter companion started");
}
