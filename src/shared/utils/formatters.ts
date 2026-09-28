/**
 * Formata para o padrão de CPF: 000.000.000-00
 */
export const formatCPF = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 11);

  if (digitsOnly.length > 9) {
    return digitsOnly.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  }
  if (digitsOnly.length > 6) {
    return digitsOnly.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  }
  if (digitsOnly.length > 3) {
    return digitsOnly.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  }
  return digitsOnly;
};

/**
 * Formata para o padrão de telefone/celular:
 * Celular (11 dígitos): (00) 00000-0000
 * Fixo (10 dígitos): (00) 0000-0000
 */
export const formatPhone = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 11);

  if (digitsOnly.length === 11) {
    return digitsOnly.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
  if (digitsOnly.length > 6) {
    return digitsOnly.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
  }
  if (digitsOnly.length > 2) {
    // Enquanto digita o DDD
    return digitsOnly.replace(/(\d{2})(\d{1,4})/, "($1) $2");
  }
  if (digitsOnly.length > 0) {
    return digitsOnly.replace(/(\d{1,2})/, "($1");
  }
  return digitsOnly;
};

// Remove qualquer caractere que não seja um dígito de texto
export const unformat = (value: string): string => {
  return value.replace(/\D/g, "");
};