import { useI18n } from "../i18n/context";
import PrivacyLayout from "../components/PrivacyLayout";

export function meta() {
  return [
    { title: "妙记 Keepy - 隐私政策 | Privacy Policy" },
    {
      name: "description",
      content:
        "妙记 Keepy 隐私政策，了解我们如何收集、使用和保护您的个人信息。Keepy Privacy Policy.",
    },
  ];
}

export default function KeepyPrivacy() {
  const { t } = useI18n();
  const privacy = t("keepyPrivacy");

  return (
    <PrivacyLayout
      title={privacy.title}
      intro={privacy.intro}
      sections={privacy.sections}
    />
  );
}
