import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BrandLogo, PrimaryButton } from '../../components';
import { AuthStackParamList } from '../../types/navigation';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <BrandLogo size="small" />
      <View style={styles.card}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.copy}>Log in to discover plans near you.</Text>
        <TextInput placeholder="Email" placeholderTextColor={colors.muted} style={styles.input} />
        <TextInput placeholder="Password" placeholderTextColor={colors.muted} secureTextEntry style={styles.input} />
        <PrimaryButton label="Log in" onPress={() => undefined} />
        <PrimaryButton label="Create an account" onPress={() => navigation.navigate('Signup')} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.offWhite, flex: 1, gap: spacing.xl, padding: spacing.lg, paddingTop: spacing.xxl },
  card: { backgroundColor: colors.white, borderRadius: 28, gap: spacing.md, padding: spacing.lg, shadowColor: colors.blueDark, shadowOpacity: 0.08, shadowRadius: 18 },
  title: { color: colors.ink, fontSize: 30, fontWeight: '900' },
  copy: { color: colors.slate, fontSize: 16, lineHeight: 24 },
  input: { backgroundColor: colors.offWhite, borderColor: colors.border, borderRadius: 16, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 54, paddingHorizontal: spacing.md },
});
