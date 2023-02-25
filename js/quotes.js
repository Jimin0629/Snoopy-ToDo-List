const quotes = [
	{ quote: "미소를 잃지마." },
	{ quote: "끊임 없이 높은 곳을 바라보는 거…그게 인생의 비밀이야." },
	{ quote: "너가 정답이야. 그 아무도 너가 잘못하고 있다고 말할 수 없어." },
	{ quote: "친절함은 누구에게나 통해." },
	{
		quote:
			"너의 손을 떠난 것에 대해 스트레스를 받지 말고, 너의 것이 아닌 것에 대해 결코 걱정하지 마.",
	},
	{ quote: "원하는 것이 적을수록 더 많이 사랑하게 될거야." },
	{
		quote:
			"나를 싫어하는 사람을 걱정할 시간이 없어, 나를 사랑해주는 사람들을 사랑하기에도 너무 바쁘거든.",
	},
	{ quote: "우리 각자에게는 각자의 소명이 있어." },
	{ quote: "나는 아침 알레르기가 있는 것 같아." },
	{ quote: "너도 틀린적이 있니?" },
	{ quote: "안돼… 나 지금 피자 생각하고 있단 말이야." },
	{ quote: "요즘 무슨 일들이 일어나고 있는지 잘 모르겠어." },
	{ quote: "쥐를 보니까 무슨 말을 하려했는지 기억이 안나." },
	{ quote: "슬프게도, 루트비어를 마시고 나면 누군가를 잊기가 매우 어려워져." },
	{ quote: "나를 비꼬는 대답 때문에 마음이 혼란스러워." },
	{ quote: "나는 항상 같은 걸 주문하는데, 왜 메뉴를 보는지 모르겠어." },
	{ quote: "나 지금 바쁘다고 전해 줘." },
	{ quote: "IRS님, 메일링 리스트에서 저를 지워주세요." },
	{
		quote:
			"내 인생에는 목적도, 방향도, 목적도, 의미도 없지만 나는 행복해. 이런 내가 왜 행복한지 나도 잘 모르겠어",
	},
	{ quote: "사는게 힘들 때, 누워서 별을 봐봐." },
	{ quote: "친구 생각만 해도 행복하게 춤을 추고 싶어져." },
	{ quote: "너가 여기 있을 때가 제일 좋아." },
	{ quote: "너의 잘못까지 사랑해주는 사람이 진정한 친구야." },
	{ quote: "조깅은 다리에 매우 좋아. 꼭 필요한거야." },
	{ quote: "우정은 다른 특별한 것이 아니야, 즐기는거야." },
	{ quote: "나는 내가 무엇이 필요한지 알아. 더 많이 안부를 물어봐줘." },
	{ quote: "삶은 춤이고, 춤은 삶이야." },
	{
		quote:
			"왜 우리는 우리가 정말 좋아하는 사람들과 함께 모여 지낼 수는 없는 걸까? 아마 누군가는 떠날거야. 그리고 작별 인사를 해야겠지. 난 헤어짐이 싫은데. ",
	},
	{ quote: "작은 희망과 내 모든 추억은 비교할 수 없어." },
	{
		quote:
			"어떤 이는 던지고 어떤 이는 가져오고, 어떤 이는 조깅하고 어떤 이는 뛰지. 이들을 다 사랑하면 전부 얻을 수 있어",
	},
	{ quote: "인생은 예상 할 수 없는 각성의 연속이야" },
	{ quote: "정말 할 말이 없다면, 많이 짖는 것 또한 의미가 없어." },
	{
		quote:
			"우리 중 일부는 개로 태어났고 일부는 토끼로 태어났어. 근데 희안하게 나는 난 토끼에게 더 호감이 간다?",
	},
	{
		quote:
			"아버지는 사냥개들과 함께 달리곤 했지만 그의 마음은 다른 데 있었어. 그는 앞서 달려가서 토끼들에게 경고하곤 했지",
	},
];

const quote = document.querySelector("#quote span:first-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
