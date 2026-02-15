import { useI18n } from "../i18n/context";
import PrivacyLayout from "../components/PrivacyLayout";

export function meta() {
  return [
    { title: "智帐 NeoLedger - 隐私政策 | Privacy Policy" },
    {
      name: "description",
      content:
        "智帐 NeoLedger 隐私政策，了解我们如何收集、使用和保护您的个人信息。NeoLedger Privacy Policy.",
    },
  ];
}

export default function NeoLedgerPrivacy() {
  const { t } = useI18n();
  const privacy = t("neoledgerPrivacy");

  return (
    <PrivacyLayout
      title={privacy.title}
      intro={privacy.intro}
      sections={privacy.sections}
    />
  );
}
