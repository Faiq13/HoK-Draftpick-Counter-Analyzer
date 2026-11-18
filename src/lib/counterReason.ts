import type { TFunction } from 'i18next';

export function resolveCounterReason(reason: string, t: TFunction): string {
  if (reason.startsWith('__LIVE_META__:')) {
    const payload = reason.slice('__LIVE_META__:'.length);
    const { candidate, enemy } = payload.startsWith('{')
      ? JSON.parse(payload) as { candidate: string; enemy: string }
      : { candidate: payload.split('|')[0], enemy: payload.split('|')[1] };
    return t('liveMetaCounter', { candidate, enemy });
  }
  if (reason.startsWith('__FALLBACK__:')) {
    const [candidate, enemy] = reason.slice('__FALLBACK__:'.length).split('|');
    return t('fallbackCounter', { candidate, enemy });
  }
  if (reason.startsWith('__VERIFIED__:')) {
    const [counter, target] = reason.slice('__VERIFIED__:'.length).split('|');
    return t('verifiedMatchup', { counter, target });
  }
  return reason;
}
