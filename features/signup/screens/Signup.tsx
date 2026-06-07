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
import User03Icon from "@hugeicons/core-free-icons/User03Icon";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react-native";
import { useRouter, type Href } from "expo-router";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";
import { useAppDirection } from "@/hooks/useAppDirection";

const patternSource = require("@/assets/images/background-pattern-decorative.png");

const fieldIcon = (icon: IconSvgElement) => (
  <HugeiconsIcon icon={icon} size={22} />
);

const Signup = () => {
  const { t } = useTranslation();
  const { directionStyle, textAlign, writingDirection } = useAppDirection();
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Changa_400Regular,
    Changa_500Medium,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={[styles.container, directionStyle]}>
      <ImageBackground
        source={patternSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          style={styles.flex}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          extraHeight={120}
          extraScrollHeight={120}
        >
          <Header
            title={t("auth.signUpTitle")}
            subtitle={t("auth.signUpSubtitle")}
          />

          <View style={styles.actions}>
            <View>
              <Text style={[styles.label, { textAlign, writingDirection }]}>
                {t("common.name")} <Text style={styles.star}>{t("common.required")}</Text>
              </Text>
              <Input
                placeholder={t("auth.enterYourName")}
                icon={fieldIcon(User03Icon)}
              />
            </View>

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

            <View>
              <Text style={[styles.label, { textAlign, writingDirection }]}>
                {t("common.password")} <Text style={styles.star}>{t("common.required")}</Text>
              </Text>
              <PasswordInput
                placeholder={t("common.passwordPlaceholder")}
                icon={fieldIcon(LockPasswordIcon)}
              />
            </View>

            <View>
              <Text style={[styles.label, { textAlign, writingDirection }]}>
                {t("auth.confirmPasswordLabel")} <Text style={styles.star}>{t("common.required")}</Text>
              </Text>
              <PasswordInput
                placeholder={t("common.passwordPlaceholder")}
                icon={fieldIcon(LockPasswordIcon)}
              />
            </View>

            <Button title={t("auth.createAccount")} />
            <GoogleButton title={t("auth.googleSignUp")} />

            <View style={styles.footerAuth}>
              <Text style={styles.footerAuthMuted}>
                {t("auth.hasAccount")}
              </Text>

              <TextLinkButton
                title={t("auth.signIn")}
                variant="inline"
                onPress={() => router.push("/signin" as Href)}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 16,
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

export default Signup;