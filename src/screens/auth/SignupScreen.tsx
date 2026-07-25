import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { PrimaryButton } from '../../components';
import { AuthStackParamList } from '../../types/navigation';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

export function SignupScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.kicker}>18+ community</Text>
        <Text style={styles.title}>Create your squadUP account</Text>
        <Text style={styles.copy}>Age verification and safety features will be built into onboarding next.</Text>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Full name" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Date of birth" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
        <PrimaryButton label="Sign up" onPress={() => undefined} />
        <PrimaryButton label="Back to login" onPress={() => navigation.navigate('Login')} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.offWhite, flex: 1, padding: spacing.lg, paddingTop: spacing.xxl },
  header: { marginBottom: spacing.xl },
  kicker: { color: colors.red, fontSize: 14, fontWeight: '900', letterSpacing: 1, textTransform: 'uppercase' },
  title: { color: colors.ink, fontSize: 34, fontWeight: '900', marginTop: spacing.sm },
  copy: { color: colors.slate, fontSize: 16, lineHeight: 24, marginTop: spacing.md },
  form: { gap: spacing.md },
  input: { backgroundColor: colors.white, borderColor: colors.border, borderRadius: 16, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 54, paddingHorizontal: spacing.md },
});
