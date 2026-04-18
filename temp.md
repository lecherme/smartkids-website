Target Component: `@ServicesSection.tsx`
Refactor Mode: STYLE ONLY (Tailwind Refactor)
Constraint: DO NOT alter the JSX structure, props, data mapping, or component hierarchy. 

PIPELINE: figma-to-ir(Omni-Mode) -> ir-normalizer -> ir-validator -> ir-to-react-tailwind

STRICT RULES:
1. PRESERVE all functional logic: `SERVICES.map`, `iconMap`, `FadeIn` wrappers, and ID/Ref attributes.
2. UPDATE ONLY the `className` values and background decorative elements.
3. Aesthetic: [NEW] High-Tech Purple (Forget "Wuwei"). Translate the Figma blurs/gradients into Tailwind classes.
4. Validation: IR must pass `ir-validator` without `className` or layout depth errors before generating code.

--- RAW FIGMA INPUT ---
<div className="w-[1440px] h-[990px] relative bg-gray-800 overflow-hidden">
  <div className="w-[493px] h-[493px] left-[996px] top-[569px] absolute bg-violet-600 rounded-full blur-[200px]" />
  <div className="w-[493px] h-[493px] left-[996px] top-[409px] absolute bg-violet-600 rounded-full blur-[200px]" />
  <div className="w-[1440px] h-[1269.50px] left-0 top-[268px] absolute bg-gray-800" />
  <div className="w-[1440px] h-[1269.50px] left-0 top-[-920px] absolute bg-gray-800" />
  <div className="w-[700px] left-[370px] top-[179px] absolute text-center justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-8"> in virtual space through communication platforms. Durable relations that extend beyond immediate genealogical ties.</div>
  <div className="left-[502px] top-[97px] absolute text-center justify-start text-purple-500 text-6xl font-bold font-['Gilroy'] leading-[60px]">What we Offer?</div>
  <div className="w-72 h-64 left-[257px] top-[319px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)]" />
  <div className="w-56 left-[292px] top-[488px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">Apps keep work and information right at your fingertips—and Slack keeps it all securely.</div>
  <div className="left-[292px] top-[455px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">Community Support</div>
  <div className="w-14 h-14 left-[292px] top-[355px] absolute bg-slate-800 rounded-[40px] shadow-[20px_25px_70px_0px_rgba(249,218,213,0.80)]" />
  <div className="w-5 h-5 left-[313.77px] top-[371px] absolute bg-gradient-to-l from-purple-500 to-orange-300" />
  <div className="w-5 h-5 left-[308.29px] top-[379.59px] absolute bg-gradient-to-l from-purple-500 to-orange-300" />
  <div className="w-2.5 h-[2.74px] left-[313.77px] top-[386.45px] absolute bg-gradient-to-l from-purple-500 to-orange-300" />
  <div className="w-72 h-64 left-[579px] top-[319px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)] shadow-[0px_4.562963008880615px_5.133333206176758px_0px_rgba(0,0,0,0.09)] shadow-[0px_11.199999809265137px_10.237500190734863px_0px_rgba(0,0,0,0.11)] shadow-[0px_21.570369720458984px_20.066667556762695px_0px_rgba(0,0,0,0.13)] shadow-[0px_36.296295166015625px_36.89583206176758px_0px_rgba(0,0,0,0.17)] shadow-[0px_56px_63px_0px_rgba(0,0,0,0.22)]" />
  <div className="w-56 left-[614px] top-[488px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">Connect the tools you already use to get more from them every time you work.</div>
  <div className="left-[614px] top-[455px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">Security First</div>
  <div className="w-14 h-14 left-[614px] top-[355px] absolute bg-slate-800 rounded-[40px] shadow-[20px_25px_70px_0px_rgba(227,138,97,0.70)]" />
  <div className="w-6 h-7 left-[632px] top-[371px] absolute bg-gradient-to-l from-purple-500 to-orange-300 shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)] shadow-[0px_4.562963008880615px_5.133333206176758px_0px_rgba(0,0,0,0.09)] shadow-[0px_11.199999809265137px_10.237500190734863px_0px_rgba(0,0,0,0.11)] shadow-[0px_21.570369720458984px_20.066667556762695px_0px_rgba(0,0,0,0.13)] shadow-[0px_36.296295166015625px_36.89583206176758px_0px_rgba(0,0,0,0.17)] shadow-[0px_56px_63px_0px_rgba(0,0,0,0.22)]" />
  <div className="w-72 h-64 left-[901px] top-[319px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)]" />
  <div className="w-56 left-[936px] top-[488px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">You can work with apps in channels, where they’re a seamless part of the conver.</div>
  <div className="left-[936px] top-[455px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">24/7 Admin Support</div>
  <div className="w-14 h-14 left-[936px] top-[355px] absolute bg-slate-800 rounded-[40px] shadow-[20px_25px_70px_0px_rgba(249,218,213,0.80)]" />
  <div className="w-7 h-7 left-[952px] top-[372px] absolute bg-gradient-to-l from-purple-500 to-orange-300 shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)] shadow-[0px_4.562963008880615px_5.133333206176758px_0px_rgba(0,0,0,0.09)] shadow-[0px_11.199999809265137px_10.237500190734863px_0px_rgba(0,0,0,0.11)] shadow-[0px_21.570369720458984px_20.066667556762695px_0px_rgba(0,0,0,0.13)] shadow-[0px_36.296295166015625px_36.89583206176758px_0px_rgba(0,0,0,0.17)] shadow-[0px_56px_63px_0px_rgba(0,0,0,0.22)]" />
  <div className="w-72 h-64 left-[257px] top-[629px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)]" />
  <div className="w-56 left-[292px] top-[798px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">Spend less time tracking down the people needed to get work done.</div>
  <div className="left-[292px] top-[765px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">100+ Themes</div>
  <div className="w-14 h-14 left-[292px] top-[665px] absolute bg-slate-800 rounded-[40px] shadow-[20px_25px_70px_0px_rgba(249,218,213,0.80)]" />
  <div className="w-7 h-7 left-[309px] top-[681px] absolute bg-gradient-to-l from-purple-500 to-orange-300 shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)] shadow-[0px_4.562963008880615px_5.133333206176758px_0px_rgba(0,0,0,0.09)] shadow-[0px_11.199999809265137px_10.237500190734863px_0px_rgba(0,0,0,0.11)] shadow-[0px_21.570369720458984px_20.066667556762695px_0px_rgba(0,0,0,0.13)] shadow-[0px_36.296295166015625px_36.89583206176758px_0px_rgba(0,0,0,0.17)] shadow-[0px_56px_63px_0px_rgba(0,0,0,0.22)]" />
  <div className="w-72 h-64 left-[579px] top-[629px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)]" />
  <div className="w-56 left-[614px] top-[798px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">Skip the follow-ups and back-and -forth. Easily standardize how you collect </div>
  <div className="left-[614px] top-[765px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">Fully Integrated</div>
  <div className="w-14 h-14 left-[614px] top-[665px] absolute bg-slate-800 rounded-[60px]" />
  <div className="w-7 h-7 left-[630px] top-[681px] absolute bg-gradient-to-l from-purple-500 to-orange-300 shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)] shadow-[0px_4.562963008880615px_5.133333206176758px_0px_rgba(0,0,0,0.09)] shadow-[0px_11.199999809265137px_10.237500190734863px_0px_rgba(0,0,0,0.11)] shadow-[0px_21.570369720458984px_20.066667556762695px_0px_rgba(0,0,0,0.13)] shadow-[0px_36.296295166015625px_36.89583206176758px_0px_rgba(0,0,0,0.17)] shadow-[0px_56px_63px_0px_rgba(0,0,0,0.22)]" />
  <div className="w-72 h-64 left-[901px] top-[629px] absolute bg-gray-700 rounded-[10px] shadow-[0px_1.0370370149612427px_2.4791667461395264px_0px_rgba(0,0,0,0.05)]" />
  <div className="w-56 left-[936px] top-[798px] absolute justify-start text-indigo-300 text-base font-normal font-['Gilroy-Medium'] leading-5">Take control of your work day. In a just a few minutes, create a customized workflow </div>
  <div className="left-[936px] top-[765px] absolute justify-start text-indigo-300 text-xl font-bold font-['Gilroy'] leading-4">Monthly Update</div>
  <div className="w-14 h-14 left-[936px] top-[665px] absolute bg-slate-800 rounded-[40px] shadow-[20px_25px_70px_0px_rgba(249,218,213,0.80)]" />
  <div className="w-6 h-7 left-[954px] top-[681px] absolute bg-gradient-to-l from-purple-500 to-orange-300" />
  <div className="w-5 h-5 left-[959.93px] top-[682.71px] absolute bg-gradient-to-l from-purple-500 to-orange-300" />
</div>
--- END ---

Execute step-by-step. Focus on the CSS/Tailwind transformation.