interface LoyaltyProps {
  points: number;
  nextTier: number;
}

export const LoyaltyRewardsCard = ({ points, nextTier }: LoyaltyProps) => {
  const loyaltyPercentage = Math.min((points / nextTier) * 100, 100);

  return (
    <div className="bg-[var(--color-input-bg)] border border-[var(--color-border)] p-6 md:p-8 rounded-sm shadow-sm">
      <h2 className="text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-6">
        Loyalty Rewards
      </h2>
      <div className="flex justify-between items-end mb-3">
        <span className="text-sm font-bold text-[var(--color-text-dark)] uppercase tracking-wide">
          Current Balance: {points} Points
        </span>
        <span className="text-xs font-extrabold text-[var(--color-brown-light)]">
          {Math.round(loyaltyPercentage)}%
        </span>
      </div>
      <div className="w-full bg-[var(--color-bg)] border border-[var(--color-border)] h-3 rounded-sm mb-4 overflow-hidden">
        <div 
          className="bg-[var(--color-brown-dark)] h-full transition-all duration-1000 ease-out"
          style={{ width: `${loyaltyPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] font-medium">
        Only <span className="font-bold text-[var(--color-brown-dark)]">{nextTier - points} points</span> away from a complimentary Beard Sculpt!
      </p>
    </div>
  );
};