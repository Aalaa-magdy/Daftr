import { Redirect } from 'expo-router';

/** Native Android splash only — no in-app splash UI. */
export default function Index() {
  return <Redirect href="/onboarding" />;
}
