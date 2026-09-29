// Formata para o padrão de CPF: 000.000.000-00
export const formatCPF = (value?: string): string => {
  if (!value) return "";
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
 * Celular (11 dígitos): (00) 00000-0000
 * Fixo (10 dígitos): (00) 0000-0000
 */
export const formatPhone = (value?: string): string => {
  if (!value) return "";
  const digitsOnly = value.replace(/\D/g, "").slice(0, 11);

  if (digitsOnly.length === 11) {
    return digitsOnly.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
  if (digitsOnly.length > 6) {
    return digitsOnly.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
  }
  if (digitsOnly.length > 2) {
    return digitsOnly.replace(/(\d{2})(\d{1,4})/, "($1) $2");
  }
  if (digitsOnly.length > 0) {
    return digitsOnly.replace(/(\d{1,2})/, "($1");
  }
  return digitsOnly;
};

// Formata data para o padrão brasileiro: DD/MM/AAAA
export const formatDateBR = (dateString?: string): string => {
  if (!dateString) return "";

  const datePart = dateString.split("T")[0];
  const parts = datePart.split("-");

  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateString;
};

export const unformat = (value: string): string => {
  return value.replace(/\D/g, "");
};