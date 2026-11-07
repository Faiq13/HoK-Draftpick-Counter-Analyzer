// Sumber: https://camp.honorofkings.com/h5/app/index.html?lang_type=en#/hero-hot-list
// Update: 10/29/2026 (Season 16)
// Total: 120 hero, Diamond tier or above

export interface HeroTierEntry {
  name: string;
  role: string; // HoK Camp role string (Mage, Fighter, Tank, etc.)
  tier: 'S' | 'A' | 'B' | 'C';
  winRate: string;
  pickRate: string;
  banRate: string;
}

export const HOK_TIER_DATA: HeroTierEntry[] = [
  { name: "Dunshan", role: "Support/Tank", tier: "S", winRate: "44.63%", pickRate: "1.62%", banRate: "4.39%" },
  { name: "Angela", role: "Mage", tier: "S", winRate: "51.47%", pickRate: "2.94%", banRate: "1.06%" },
  { name: "Daji", role: "Mage", tier: "S", winRate: "50.53%", pickRate: "2.37%", banRate: "1.79%" },
  { name: "Augran", role: "Fighter", tier: "S", winRate: "48.89%", pickRate: "1.56%", banRate: "3.33%" },
  { name: "Li Xin", role: "Fighter", tier: "S", winRate: "52.09%", pickRate: "1.72%", banRate: "2.02%" },
  { name: "Liang", role: "Mage", tier: "S", winRate: "50.37%", pickRate: "0.77%", banRate: "3.92%" },
  { name: "Ao'yin", role: "Marksman", tier: "S", winRate: "49.26%", pickRate: "1.57%", banRate: "2.18%" },
  { name: "Lady Sun", role: "Marksman", tier: "S", winRate: "50.40%", pickRate: "2.39%", banRate: "0.31%" },
  { name: "Hou Yi", role: "Marksman", tier: "S", winRate: "49.00%", pickRate: "2.46%", banRate: "0.14%" },
  { name: "Milady", role: "Mage", tier: "S", winRate: "48.01%", pickRate: "1.61%", banRate: "1.62%" },
  { name: "Dolia", role: "Support", tier: "S", winRate: "47.87%", pickRate: "1.92%", banRate: "0.80%" },
  { name: "Donghuang", role: "Support/Tank", tier: "S", winRate: "48.49%", pickRate: "0.76%", banRate: "2.78%" },
  { name: "Cai Yan", role: "Support", tier: "A", winRate: "52.39%", pickRate: "1.08%", banRate: "1.97%" },
  { name: "Haya", role: "Mage", tier: "A", winRate: "47.57%", pickRate: "0.96%", banRate: "2.19%" },
  { name: "Kongming", role: "Mage", tier: "A", winRate: "50.53%", pickRate: "1.62%", banRate: "0.62%" },
  { name: "Marco Polo", role: "Marksman", tier: "A", winRate: "51.00%", pickRate: "1.79%", banRate: "0.25%" },
  { name: "Wang Zhaojun", role: "Mage", tier: "A", winRate: "51.04%", pickRate: "1.57%", banRate: "0.67%" },
  { name: "Yaria", role: "Support", tier: "A", winRate: "50.27%", pickRate: "1.04%", banRate: "1.59%" },
  { name: "Wang Wei", role: "Mage", tier: "A", winRate: "51.05%", pickRate: "1.04%", banRate: "1.41%" },
  { name: "Mozi", role: "Mage/Fighter", tier: "A", winRate: "49.74%", pickRate: "1.16%", banRate: "1.08%" },
  { name: "Dyadia", role: "Support/Mage", tier: "A", winRate: "50.04%", pickRate: "1.03%", banRate: "1.28%" },
  { name: "Lam", role: "Assassin/Fighter", tier: "A", winRate: "48.46%", pickRate: "1.07%", banRate: "1.18%" },
  { name: "Garo", role: "Marksman", tier: "A", winRate: "53.36%", pickRate: "1.45%", banRate: "0.37%" },
  { name: "Dun", role: "Tank/Fighter", tier: "A", winRate: "51.72%", pickRate: "1.30%", banRate: "0.66%" },
  { name: "Consort Yu", role: "Marksman", tier: "A", winRate: "50.94%", pickRate: "1.53%", banRate: "0.19%" },
  { name: "Xiao Qiao", role: "Mage", tier: "A", winRate: "47.70%", pickRate: "1.49%", banRate: "0.27%" },
  { name: "Luban No.7", role: "Marksman", tier: "A", winRate: "46.08%", pickRate: "1.50%", banRate: "0.23%" },
  { name: "Erin", role: "Marksman", tier: "A", winRate: "50.62%", pickRate: "1.54%", banRate: "0.11%" },
  { name: "Sun Ce", role: "Fighter/Tank", tier: "A", winRate: "51.03%", pickRate: "1.50%", banRate: "0.13%" },
  { name: "Chicha", role: "Fighter", tier: "A", winRate: "51.62%", pickRate: "1.40%", banRate: "0.29%" },
  { name: "Wukong", role: "Assassin", tier: "A", winRate: "48.10%", pickRate: "1.23%", banRate: "0.60%" },
  { name: "Luara", role: "Marksman", tier: "A", winRate: "53.45%", pickRate: "1.42%", banRate: "0.13%" },
  { name: "Arke", role: "Assassin", tier: "A", winRate: "52.81%", pickRate: "0.71%", banRate: "1.44%" },
  { name: "Umbreosa", role: "Fighter", tier: "A", winRate: "51.19%", pickRate: "1.34%", banRate: "0.17%" },
  { name: "Nuwa", role: "Mage", tier: "A", winRate: "54.03%", pickRate: "1.02%", banRate: "0.64%" },
  { name: "Da Qiao", role: "Support/Mage", tier: "A", winRate: "51.03%", pickRate: "0.91%", banRate: "0.75%" },
  { name: "Mi Yue", role: "Mage/Fighter", tier: "B", winRate: "49.72%", pickRate: "0.73%", banRate: "1.09%" },
  { name: "Lu Bu", role: "Fighter/Tank", tier: "B", winRate: "48.49%", pickRate: "1.15%", banRate: "0.26%" },
  { name: "Gao Changgong", role: "Assassin", tier: "B", winRate: "50.45%", pickRate: "0.58%", banRate: "1.36%" },
  { name: "Kui", role: "Support/Mage", tier: "B", winRate: "50.20%", pickRate: "0.91%", banRate: "0.63%" },
  { name: "Devara", role: "Fighter/Mage", tier: "B", winRate: "48.83%", pickRate: "1.07%", banRate: "0.22%" },
  { name: "Kaizer", role: "Fighter/Tank", tier: "B", winRate: "50.62%", pickRate: "1.06%", banRate: "0.11%" },
  { name: "Flowborn (Assassin)", role: "Assassin", tier: "B", winRate: "50.08%", pickRate: "0.90%", banRate: "0.42%" },
  { name: "Lian Po", role: "Tank", tier: "B", winRate: "52.06%", pickRate: "1.02%", banRate: "0.15%" },
  { name: "Shouyue", role: "Marksman/Assassin", tier: "B", winRate: "50.55%", pickRate: "1.03%", banRate: "0.11%" },
  { name: "Zhuangzi", role: "Support/Tank", tier: "B", winRate: "49.37%", pickRate: "0.51%", banRate: "1.06%" },
  { name: "Chano", role: "Marksman", tier: "B", winRate: "51.72%", pickRate: "0.96%", banRate: "0.09%" },
  { name: "Zilong", role: "Fighter/Assassin", tier: "B", winRate: "52.22%", pickRate: "0.97%", banRate: "0.06%" },
  { name: "Musashi", role: "Fighter/Assassin", tier: "B", winRate: "49.39%", pickRate: "0.86%", banRate: "0.28%" },
  { name: "Arthur", role: "Fighter/Tank", tier: "B", winRate: "50.36%", pickRate: "0.98%", banRate: "0.03%" },
  { name: "Dian Wei", role: "Fighter", tier: "B", winRate: "50.18%", pickRate: "0.84%", banRate: "0.24%" },
  { name: "Fang", role: "Marksman", tier: "B", winRate: "49.54%", pickRate: "0.93%", banRate: "0.04%" },
  { name: "Pei", role: "Fighter/Tank", tier: "B", winRate: "51.05%", pickRate: "0.74%", banRate: "0.33%" },
  { name: "Florentino", role: "Fighter/Assassin", tier: "B", winRate: "49.90%", pickRate: "0.74%", banRate: "0.11%" },
  { name: "Jing", role: "Mage", tier: "B", winRate: "50.08%", pickRate: "0.68%", banRate: "0.60%" },
  { name: "Zhou Yu", role: "Mage", tier: "B", winRate: "50.70%", pickRate: "0.84%", banRate: "0.25%" },
  { name: "Meng Huo", role: "Tank/Fighter", tier: "B", winRate: "51.69%", pickRate: "0.79%", banRate: "0.08%" },
  { name: "Shangguan Wan'er", role: "Mage/Assassin", tier: "B", winRate: "50.42%", pickRate: "0.88%", banRate: "0.08%" },
  { name: "Butterfly", role: "Assassin/Fighter", tier: "B", winRate: "50.42%", pickRate: "0.72%", banRate: "0.14%" },
  { name: "Huang Zhong", role: "Marksman", tier: "B", winRate: "49.85%", pickRate: "0.68%", banRate: "0.11%" },
  { name: "Sun Bin", role: "Support", tier: "B", winRate: "49.90%", pickRate: "0.75%", banRate: "0.08%" },
  { name: "Yang Jian", role: "Fighter/Mage", tier: "B", winRate: "49.15%", pickRate: "0.64%", banRate: "0.21%" },
  { name: "Mulan", role: "Fighter", tier: "B", winRate: "51.60%", pickRate: "0.68%", banRate: "0.09%" },
  { name: "Zhao Yun", role: "Fighter", tier: "B", winRate: "49.53%", pickRate: "0.65%", banRate: "0.15%" },
  { name: "Han Xin", role: "Assassin", tier: "B", winRate: "49.47%", pickRate: "0.75%", banRate: "0.08%" },
  { name: "Diaochan", role: "Mage/Assassin", tier: "B", winRate: "49.53%", pickRate: "0.68%", banRate: "0.09%" },
  { name: "Zhang Fei", role: "Tank", tier: "B", winRate: "49.07%", pickRate: "0.74%", banRate: "0.08%" },
  { name: "Biron", role: "Tank/Fighter", tier: "B", winRate: "49.69%", pickRate: "0.73%", banRate: "0.09%" },
  { name: "Nakoruru", role: "Support/Assassin", tier: "B", winRate: "50.72%", pickRate: "0.68%", banRate: "0.03%" },
  { name: "Alessio", role: "Assassin/Fighter", tier: "B", winRate: "49.85%", pickRate: "0.70%", banRate: "0.03%" },
  { name: "Allain", role: "Fighter", tier: "C", winRate: "49.73%", pickRate: "0.52%", banRate: "0.04%" },
  { name: "Li Bai", role: "Assassin", tier: "C", winRate: "49.73%", pickRate: "0.70%", banRate: "0.04%" },
  { name: "Agudo", role: "Assassin/Fighter", tier: "C", winRate: "50.08%", pickRate: "0.46%", banRate: "0.09%" },
  { name: "Annette", role: "Support/Mage", tier: "C", winRate: "49.47%", pickRate: "0.53%", banRate: "0.11%" },
  { name: "Mai Shiranui", role: "Mage/Assassin", tier: "C", winRate: "49.07%", pickRate: "0.55%", banRate: "0.08%" },
  { name: "Yixing", role: "Mage", tier: "C", winRate: "49.90%", pickRate: "0.46%", banRate: "0.14%" },
  { name: "Augran", role: "Fighter", tier: "C", winRate: "49.21%", pickRate: "0.47%", banRate: "0.03%" },
  { name: "Luna", role: "Marksman/Assassin", tier: "C", winRate: "49.90%", pickRate: "0.52%", banRate: "0.03%" },
  { name: "Ziya", role: "Support/Mage", tier: "C", winRate: "50.08%", pickRate: "0.42%", banRate: "0.11%" },
  { name: "Guan Yu", role: "Fighter/Tank", tier: "C", winRate: "49.21%", pickRate: "0.52%", banRate: "0.03%" },
  { name: "Donghuang Taiyi", role: "Support/Mage", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.14%" },
  { name: "Luo Yi", role: "Mage", tier: "C", winRate: "49.47%", pickRate: "0.37%", banRate: "0.09%" },
  { name: "Sikong Zhen", role: "Fighter/Mage", tier: "C", winRate: "49.90%", pickRate: "0.37%", banRate: "0.08%" },
  { name: "Dr Bian", role: "Support/Mage", tier: "C", winRate: "49.47%", pickRate: "0.42%", banRate: "0.03%" },
  { name: "Ukyo Tachibana", role: "Fighter/Assassin", tier: "C", winRate: "49.21%", pickRate: "0.37%", banRate: "0.03%" },
  { name: "Xuance", role: "Fighter", tier: "C", winRate: "49.73%", pickRate: "0.42%", banRate: "0.03%" },
  { name: "Ata", role: "Fighter/Tank", tier: "C", winRate: "50.08%", pickRate: "0.37%", banRate: "0.03%" },
  { name: "Heino", role: "Tank/Fighter", tier: "C", winRate: "50.11%", pickRate: "0.42%", banRate: "0.03%" },
  { name: "Bai Qi", role: "Tank/Fighter", tier: "C", winRate: "49.47%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Sima Yi", role: "Mage", tier: "C", winRate: "49.73%", pickRate: "0.37%", banRate: "0.03%" },
  { name: "Arli", role: "Assassin/Fighter", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Gan & Mo", role: "Support/Tank", tier: "C", winRate: "49.47%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Huang Gai", role: "Tank", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Mi Yue", role: "Mage/Fighter", tier: "C", winRate: "49.73%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Lian Po", role: "Tank", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Shi", role: "Support/Mage", tier: "C", winRate: "49.90%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Dun", role: "Tank/Fighter", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Guiguzi", role: "Support/Mage", tier: "C", winRate: "49.47%", pickRate: "0.42%", banRate: "0.01%" },
  { name: "Lui Bu", role: "Fighter/Tank", tier: "C", winRate: "50.11%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Donghuang", role: "Support/Tank", tier: "C", winRate: "49.73%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Flowborn (Tank)", role: "Tank", tier: "C", winRate: "49.90%", pickRate: "0.37%", banRate: "0.01%" },
  { name: "Flowborn (Mage)", role: "Mage", tier: "C", winRate: "47.59%", pickRate: "0.24%", banRate: "0.01%" },
  { name: "Dharma", role: "Fighter/Tank", tier: "C", winRate: "52.14%", pickRate: "0.23%", banRate: "0.01%" },
  { name: "Menki", role: "Fighter/Mage", tier: "C", winRate: "54.20%", pickRate: "0.20%", banRate: "0.01%" },
  { name: "Cirrus", role: "Assassin", tier: "C", winRate: "50.91%", pickRate: "0.19%", banRate: "0.01%" },
  { name: "Athena", role: "Fighter/Assassin", tier: "C", winRate: "53.11%", pickRate: "0.06%", banRate: "0.01%" },
];

// Map HoK Camp roles to HOK internal lane roles
export function campRoleToLane(campRole: string): string {
  if (campRole.includes('Support')) return 'Roam';
  if (campRole.includes('Assassin') && campRole.includes('Fighter')) return 'Clash';
  if (campRole.includes('Assassin')) return 'Jungle';
  if (campRole.includes('Fighter') && campRole.includes('Tank')) return 'Clash';
  if (campRole.includes('Fighter')) return 'Clash';
  if (campRole.includes('Marksman')) return 'Farm';
  if (campRole.includes('Mage')) return 'Mid';
  if (campRole.includes('Tank')) return 'Roam';
  return 'Clash';
}
