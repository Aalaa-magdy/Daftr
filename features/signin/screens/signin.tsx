import Button from "@/components/ui/Button";
import GoogleButton from "@/components/ui/GoogleButton";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import TextLinkButton from "@/components/ui/TextLinkButton";
import { colors } from "@/theme/colors";
import {
  Changa_400Regular,
  Changa_500Medium,
  useFonts,
} from "@expo-google-fonts/changa";
import Mail01Icon from "@hugeicons/core-free-icons/Mail01Icon";
import LockPasswordIcon from "@hugeicons/core-free-icons/SquareLockPasswordIcon";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react-native";
import { useRouter, type Href } from "expo-router";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import { useAppDirection } from "@/hooks/useAppDirection";
const patternSource = require("@/assets/images/background-pattern-decorative.png");

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);

const Signin = () => {
  const { t } = useTranslation();
  const { directionStyle, textAlign, writingDirection } = useAppDirection();
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={[styles.container, directionStyle]}>
      <ImageBackground
        source={patternSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 }}>
            <Header
              title={t("auth.signInTitle")}
              subtitle={t("auth.signInSubtitle")}
            />

            <View style={styles.actions}>
              <View>
                <Text style={[styles.label, { textAlign, writingDirection }]}>
                  {t("common.email")} <Text style={styles.star}>{t("common.required")}</Text>
                </Text>
                <Input
                  placeholder={t("common.emailPlaceholder")}
                  keyboardType="email-address"
                  icon={fieldIcon(Mail01Icon)}
                />
              </View>

              <View style={styles.passwordField}>
                <Text style={[styles.label, { textAlign, writingDirection }]}>
                  {t("common.password")} <Text style={styles.star}>{t("common.required")}</Text>
                </Text>
                <PasswordInput
                  placeholder={t("common.passwordPlaceholder")}
                  icon={fieldIcon(LockPasswordIcon)}
                  containerStyle={styles.passwordInput}
                />
                <View style={styles.forgetPasswordRow}>
                  <TextLinkButton
                    title={t("auth.forgetPassword")}
                    variant="inline"
                    onPress={() => router.push("/reset-password" as Href)}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottomActions}>
            <Button title={t("auth.signIn")} onPress={() => router.push("/set-salary" as Href)} />
            <GoogleButton title={t("auth.googleSignIn")} />


            <View style={styles.footerAuth}>
              <Text style={styles.footerAuthMuted}>
                {t("auth.noAccount")}
              </Text>
              <TextLinkButton
                title={t("auth.signUp")}
                variant="inline"
                onPress={() => router.push("/signup" as Href)}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingBottom: 32,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "48%",
  },
  actions: {
    marginTop: 32,
    gap: 16,
  },
  passwordField: {
    width: '100%',
  },
  passwordInput: {
    marginBottom: 4,
  },
  forgetPasswordRow: {
    width: '100%',
    direction: 'ltr',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  bottomActions: {
    gap: 16,
  },
  label: {
    width: '100%',
    fontFamily: "Changa_400Regular",
    color: colors.black,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 6,
  },
  star: {
    color: "red",
  },
  footerAuth: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    paddingBottom: 8,
  },
  footerAuthMuted: {
    fontFamily: "Changa_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: colors.captionMuted,
  },
});
export default Signin;