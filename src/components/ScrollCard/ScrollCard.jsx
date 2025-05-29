import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollCard = ({
	children,
	scrollContainerRef,
	className = '',
	animationType = 'fadeUp', // fadeUp, slideIn, scaleIn, rotateIn
	animationDuration = 1,
	ease = 'power2.out',
	scrollStart = 'top bottom-=100px',
	scrollEnd = 'bottom top+=100px',
	delay = 0,
}) => {
	const cardRef = useRef(null);

	useEffect(() => {
		const el = cardRef.current;
		if (!el) return;

		const scroller = scrollContainerRef?.current || window;

		// 애니메이션 타입별 초기 상태 및 최종 상태 설정
		const animations = {
			fadeUp: {
				from: { opacity: 0, y: 60, scale: 0.95 },
				to: { opacity: 1, y: 0, scale: 1 },
			},
			slideIn: {
				from: { opacity: 0, x: -100, rotationY: -15 },
				to: { opacity: 1, x: 0, rotationY: 0 },
			},
			scaleIn: {
				from: { opacity: 0, scale: 0.8, rotationX: 15 },
				to: { opacity: 1, scale: 1, rotationX: 0 },
			},
			rotateIn: {
				from: { opacity: 0, rotation: -10, scale: 0.9 },
				to: { opacity: 1, rotation: 0, scale: 1 },
			},
			flipIn: {
				from: { opacity: 0, rotationY: 90, scale: 0.8 },
				to: { opacity: 1, rotationY: 0, scale: 1 },
			},
		};

		const selectedAnimation = animations[animationType] || animations.fadeUp;

		gsap.fromTo(
			el,
			{
				willChange: 'transform, opacity',
				...selectedAnimation.from,
			},
			{
				duration: animationDuration,
				ease: ease,
				delay: delay,
				...selectedAnimation.to,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: scrollStart,
					end: scrollEnd,
					scrub: false, // 부드러운 애니메이션을 위해 scrub 비활성화
					once: true, // 한 번만 실행
					invalidateOnRefresh: true,
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => {
				if (trigger.trigger === el) {
					trigger.kill();
				}
			});
		};
	}, [
		scrollContainerRef,
		animationType,
		animationDuration,
		ease,
		scrollStart,
		scrollEnd,
		delay,
	]);

	return (
		<div ref={cardRef} className={`scroll-card ${className}`}>
			{children}
		</div>
	);
};

export default ScrollCard;
