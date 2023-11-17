"use client";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

function LotieAnimation() {
	return (
		<DotLottiePlayer src="/animation_llqd7ey4.lottie" loop autoplay>
			<Controls />
		</DotLottiePlayer>
	);
}
export default LotieAnimation;
