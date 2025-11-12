/**
 * Utilidades para el Lead Magnet Banner
 */

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

/**
 * Valida que un email tenga un formato correcto
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Verifica si estamos dentro del período de cooldown
 */
export const isInCooldown = (lastActionAt: number, cooldownDays: number): boolean => {
  const now = Date.now();
  const dayInMs = 24 * 60 * 60 * 1000;
  const cooldownMs = cooldownDays * dayInMs;
  return (now - lastActionAt) < cooldownMs;
};

/**
 * Extrae los parámetros UTM de la URL actual
 */
export const getUTMParams = (): UTMParams => {
  const params = new URLSearchParams(window.location.search);
  const utm: UTMParams = {};

  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');
  const utmCampaign = params.get('utm_campaign');
  const utmContent = params.get('utm_content');

  if (utmSource) utm.utm_source = utmSource;
  if (utmMedium) utm.utm_medium = utmMedium;
  if (utmCampaign) utm.utm_campaign = utmCampaign;
  if (utmContent) utm.utm_content = utmContent;

  return utm;
};

/**
 * Guarda la marca de tiempo de la última acción en localStorage
 */
export const saveLastAction = (): void => {
  localStorage.setItem("leadBanner:lastActionAt", Date.now().toString());
};

/**
 * Obtiene la marca de tiempo de la última acción desde localStorage
 */
export const getLastAction = (): number | null => {
  const stored = localStorage.getItem("leadBanner:lastActionAt");
  return stored ? parseInt(stored, 10) : null;
};
