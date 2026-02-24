import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  MousePointer2, 
  PenTool, 
  Gamepad2, 
  TrendingUp, 
  Gift, 
  Users, 
  BadgeCheck, 
  Download, 
  MessageCircle, 
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle2,
  Info,
  ShieldCheck
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="text-slate-900 w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">MulaStar</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'How it Works', 'App', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://mulastar.com/register.php?ref=samkiliswa" 
              className="hidden sm:flex px-4 py-2 text-sm font-bold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              Login
            </a>
            <a 
              href="https://mulastar.com/register.php?ref=samkiliswa" 
              className="px-5 py-2 text-sm font-bold rounded-lg bg-primary text-slate-900 hover:brightness-105 transition-all shadow-lg shadow-primary/20"
            >
              Sign Up
            </a>
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {['Features', 'How it Works', 'App', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="block text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-12 pb-20 overflow-hidden lg:pt-24 lg:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
            MulaStar – <span className="text-primary">Make Money Online</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            MulaStar is an online earning platform designed to help you make money through simple digital activities. 
            From watching short videos and clicking ads to blogging, playing games, and learning Forex, 
            MulaStar combines entertainment, education, and income opportunities in one powerful dashboard. 
            Whether you're a beginner or an experienced online earner, MulaStar gives you multiple ways to grow your income — anytime, anywhere.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="https://mulastar.com/register.php?ref=samkiliswa" 
              className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-xl shadow-primary/25 hover:scale-105 transition-transform inline-block"
            >
              Sign Up MulaStar
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-colors inline-block"
            >
              How MulaStar Works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.imghippo.com/files/Gzjd8471xnw.png`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span>Joined by 10,000+ active earners this month</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 aspect-video flex items-center justify-center overflow-hidden group">
            <div className="w-full h-full bg-slate-50 dark:bg-slate-800 rounded-lg flex flex-col p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Star className="text-primary w-4 h-4" />
                </div>
              </div>
              <div className="h-20 w-full bg-primary/10 rounded-xl p-4 flex flex-col justify-end">
                <div className="h-2 w-16 bg-primary/30 rounded mb-2"></div>
                <div className="h-6 w-32 bg-primary rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 h-full">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="text-primary w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => (
  <section className="py-20 bg-white dark:bg-background-dark/50" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">How MulaStar Works</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          MulaStar provides TikTok and YouTube videos, ad clicks, blogging, trivia questions, premium Forex tutorials, enlightening e-books, and competitive chess and draughts games to boost your earnings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Video} 
          title="TikTok & YouTube" 
          description="Watch TikTok videos directly from your MulaStar dashboard and earn money per view. This is an enjoyable way to earn while watching entertaining content. Just like TikTok tasks, users can earn by watching YouTube videos from their dashboard. Get paid while enjoying informative and entertaining content."
        />
        <FeatureCard 
          icon={Video} 
          title="Instagram & FB Reels" 
          description="Users In MulaStar can also earn by watching Instagram and Facebook Reels for about 30 seconds. Earnings are credited for each completed view, expanding your daily income options."
        />
        <FeatureCard 
          icon={PenTool} 
          title="Blogging & Writing" 
          description="MulaStar rewards users who write quality articles on trending topics. If you enjoy blogging or content creation, you can earn money by publishing engaging and informative articles. Higher-quality content attracts better rewards."
        />
        <FeatureCard 
          icon={MousePointer2} 
          title="Paid Ad Clicks" 
          description="Earn money by clicking short advertisements that last only 5 seconds. These tasks are fast, easy, and require no special skills—perfect for beginners and busy users."
        />
        <FeatureCard 
          icon={Gamepad2} 
          title="Online Games" 
          description="MulaStar features interactive online games where users compete with others. Winners earn rewards based on performance, making it ideal for gamers who want to monetize their skills."
        />
        <FeatureCard 
          icon={Gift} 
          title="Free & Bet Spins" 
          description="Every new user receives a Free Spin upon joining MulaStar. This feature allows you to spin a reward wheel and win instant bonuses such as: Cash rewards, Extra spins, Special incentives. It’s a great way to start earning immediately without spending money. The Bet Spin option allows users to deposit money and spin for a chance to win up to 10 times their stake. This feature is designed for users who enjoy calculated risks and want higher earning potential."
        />
      </div>
    </div>
  </section>
);

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black">
      {number}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const HowItWorks = () => (
  <section className="py-20 bg-white dark:bg-background-dark/50" id="how-it-works">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black sm:text-4xl">Simple Steps to Earn</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Four simple steps to start your financial journey with MulaStar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <StepCard number={1} title="Register Account" description="Sign up in seconds with your email and basic details." />
        <StepCard number={2} title="Activate Account" description="Complete the activation process to unlock your dashboard tasks." />
        <StepCard number={3} title="Complete Tasks" description="Watch, click, and play to accumulate rewards in your wallet." />
        <StepCard number={4} title="Withdraw" description="Request your earnings and get paid directly to your account." />
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 transition-colors"
      >
        <span className="font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-5 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-sm leading-relaxed"
          >
            {answer}
            <div className="mt-4">
              <a href="https://mulastar.com/register.php?ref=samkiliswa" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-slate-900 font-bold rounded-lg text-xs">
                Sign up MulaStar <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section className="py-20 bg-white dark:bg-background-dark/50" id="faq">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
        <p className="text-xl font-bold text-primary mb-4">Got Questions? We’ve Got Answers.</p>
        <p className="text-slate-600 dark:text-slate-400 mb-12">
          MulaStar Provides TikTok and YouTube Videos, Ad clicks, Blogging, Trivia questions, premium Forex tutorials, enlightening e-books, and competitive chess and draughts games to boost your earnings. Here is What you need to know:
        </p>
      </div>
      <div className="space-y-4">
        <FAQItem 
          question="1. What is MulaStar?" 
          answer="MulaStar is an online earning platform designed to help users make money by completing simple digital tasks and participating in interactive activities. It provides multiple income opportunities in one place, making it suitable for beginners as well as experienced online earners. With MulaStar, users can earn through activities such as watching videos, clicking ads, writing blogs, playing games, spinning to win rewards, and referring friends. The platform also offers bonus features like free spins, welcome bonuses, top winners rewards, and commissions from referrals. In addition to earning features, MulaStar supports user growth by offering free Forex classes for beginners who want to learn online trading skills. The platform is accessible through its website and Android app, allowing users to earn anytime and anywhere."
        />
        <FAQItem 
          question="2. How MulaStar works!" 
          answer="MulaStar works by allowing users to earn money online through simple tasks, entertainment activities, and referral programs. After creating an account on the MulaStar platform, users gain access to a dashboard where all earning features are available. Once registered and activated, users can start earning by completing daily tasks such as watching ads, viewing TikTok and YouTube videos, playing online games, and spinning to win rewards. Users can also write blog articles on trending topics and earn money for approved content. Each completed task rewards the user with earnings credited to their MulaStar account. MulaStar also features a referral system where users earn commissions by inviting others to join the platform. When a referred user activates their account, the referrer receives a percentage of the activation fee as a reward. In addition, users receive welcome bonuses, free spins, and may qualify for top winners bonuses based on performance."
        />
        <FAQItem 
          question="3. How to Download MulaStar App" 
          answer="Step-by-Step Guide: How to Download the MulaStar App. MulaStar App allows users to earn money online by completing simple daily tasks. Follow the steps below to download and install the app on your Android device. 1. Open the Official MulaStar Website. 2. Scroll Down the Homepage. 3. Click the Download Button. 4. Download the APK File. 5. Allow Installation from Unknown Sources. 6. Install the App. 7. Open the App and Register."
        />
        <FAQItem 
          question="4. How to Register MulaStar" 
          answer="Step-by-Step Guide: How to Sign Up on MulaStar. Follow the steps below to create your MulaStar account easily: 1. Visit the Official MulaStar Website. 2. Click the Sign Up / Register Button. 3. Choose a Unique Username. 4. Select Country Code and Enter Phone Number. 5. Enter Your Email Address. 6. Create and Confirm Your Password. 7. Click the Create Account button. 8. Activate and Start Earning."
        />
        <FAQItem 
          question="5. How to Login MulaStar" 
          answer="Step-by-Step Guide: How to Login to MulaStar. Follow these simple steps to access your MulaStar account: 1. Visit the Official MulaStar Website. 2. Click the Sign In Button. 3. Enter Your Login Details (Username and Password). 4. Sign In. 5. Access Your Dashboard."
        />
        <FAQItem 
          question="6. Is MulaStar Legit?" 
          answer="Yes, MulaStar is a legit online earning platform that provides real opportunities for users to earn money by completing simple digital tasks. The platform operates transparently by allowing users to register, activate their accounts, complete tasks, and track their earnings directly from their dashboard. MulaStar offers multiple earning methods such as watching ads and videos, playing games, writing blogs, referrals, and spin rewards. The presence of welcome bonuses, referral commissions, and top winners rewards further supports its structured earning system. In addition, MulaStar provides support features like free Forex classes for beginners, showing a commitment to user growth and education. Based on its working features, transparent task system, and active user base, MulaStar is a legitimate platform for earning money online when used correctly."
        />
        <FAQItem 
          question="7. Is MulaStar Available In all Countries?" 
          answer="Yes MulaStar is Available Globally."
        />
        <FAQItem 
          question="8. MULASTAR AGENCIES ACTIVATION FEES" 
          answer="Kenya - KSH 500, Tanzania - TZS 11,000, Uganda - UGX 19,000, Rwanda - RWF 6,500, Nigeria - NGN 8,000, Burundi - BIF 26000, Zambia - ZK 130, Malawi - MK 26,000, Ivory Coast - XOF 4100, Senegal - XOF 4100, Botswana - BWP 100, South Africa - ZAR 70, Ghana - GHC 90, Cameroon - XAF 4100, West Africa - XOF 4100, South Sudan - SSP 20000, Others🎌 - USD 8."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-primary w-6 h-6" />
            <span className="text-xl font-black tracking-tight">MulaStar</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The world's leading micro-task earning platform. Empowering thousands to reach financial freedom one click at a time.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6">Quick Links</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a className="hover:text-primary" href="https://mulastar.com/register.php?ref=samkiliswa">Login</a></li>
            <li><a className="hover:text-primary" href="https://mulastar.com/register.php?ref=samkiliswa">Register</a></li>
            <li><a className="hover:text-primary" href="#app">App Download</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6">Support</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a className="hover:text-primary" href="#faq">FAQ</a></li>
            <li><a className="hover:text-primary" href="https://mulastar.com/register.php?ref=samkiliswa">Privacy Policy</a></li>
            <li><a className="hover:text-primary" href="https://mulastar.com/register.php?ref=samkiliswa">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6">Connect</h5>
          <div className="flex gap-4 mb-6">
            {[1, 2, 3].map(i => (
              <a key={i} href="https://mulastar.com/register.php?ref=samkiliswa" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all">
                <Users className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">Join our official Telegram for daily updates.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 MulaStar Ecosystem. All rights reserved.</p>
        <p>Designed for global financial inclusion.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        
        {/* Key Platform Features Section */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 text-white rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-black mb-6">Key Platform Features</h2>
                  <div className="space-y-6">
                    {[
                      { icon: Users, title: "Affiliate Marketing", desc: "Refer friends and earn up to 55% commission." },
                      { icon: Gift, title: "Welcome Bonus", desc: "Get a 55% instant bonus plus free spins." },
                      { icon: TrendingUp, title: "Free Forex Classes", desc: "Master the markets with professional courses." },
                      { icon: BadgeCheck, title: "Agent Bonus", desc: "Unlock additional rewards and salary incentives." }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                          <feature.icon className="text-slate-900 w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">{feature.title}</h4>
                          <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="aspect-square bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center p-12">
                    <TrendingUp className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Registration Guide */}
        <section className="py-20 bg-background-light dark:bg-background-dark" id="registration-guide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black sm:text-4xl mb-4 uppercase tracking-tight">Register MulaStar</h2>
              <h3 className="text-xl font-bold text-primary mb-4">How to Register Mulastar</h3>
              <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                Mulastar is an online earning platform where users can make money by completing simple tasks, spinning wheels, blogging, and participating in daily activities. If you want to join, follow this clear guide to complete your Mulastar registration successfully.
              </p>
            </div>
            <div className="space-y-12">
              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Visit the Official Mulastar Website</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">To begin, open your browser and go to the official Mulastar registration page:</p>
                <a href="https://mulastar.io" className="text-primary font-bold hover:underline">🔗 https://mulastar.com</a>
                <p className="mt-4 text-xs text-amber-600 font-medium">⚠️ Always confirm you are on the correct website before entering your personal details to avoid fake or cloned sites.</p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xl font-bold mb-6">Complete the MulaStar Registration Form</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="font-bold">1️⃣ Choose a Username</p>
                    <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Select a unique username.</li>
                      <li>Avoid very simple names like user123.</li>
                      <li>Pick something secure and easy for you to remember.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="font-bold">2️⃣ Enter Your Mobile Number</p>
                    <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Select your country code.</li>
                      <li>Enter your mobile money number without including the country code.</li>
                      <li>Ensure the number is correct and active.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="font-bold">3️⃣ Provide Your Email Address</p>
                    <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Use a valid email address.</li>
                      <li>Double-check spelling to avoid missing notifications.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="font-bold">4️⃣ Create a Strong Password</p>
                    <ul className="list-disc ml-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Use a mix of letters, numbers, and symbols.</li>
                      <li>Re-enter the password in the confirmation field.</li>
                      <li>Make sure both passwords match exactly.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Add a Referral Code (Optional)</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">If someone referred you, enter their referral code in the referral section. Example: <span className="font-bold text-primary">samkiliswa</span>. Using a referral code may qualify you for a welcome bonus. If you don’t have one, you can leave it blank (if optional).</p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Accept the Terms and Conditions</h4>
                <p className="text-slate-600 dark:text-slate-400">Tick the checkbox to agree to Mulastar’s terms. This step is required before you can complete registration.</p>
              </div>

              <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Submit Your MulaStar Registration</h4>
                <p className="text-slate-600 dark:text-slate-400">Click the Register button. Wait for confirmation. You may receive a verification message via email or SMS. ✅ Once confirmed, your Mulastar account will be successfully created.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-black mb-8 uppercase">How MulaStar Works</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {[
                  { icon: Gift, text: "Free Spin rewards" },
                  { icon: Video, text: "Watching videos or ads" },
                  { icon: CheckCircle2, text: "Completing tasks" },
                  { icon: Star, text: "Deposit & Spin" },
                  { icon: BadgeCheck, text: "Daily login bonuses" }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <item.icon className="text-primary w-6 h-6 mx-auto mb-2" />
                    <p className="text-xs font-bold">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="max-w-3xl mx-auto p-6 bg-primary/5 border border-primary/20 rounded-2xl mb-12 text-left">
                <h4 className="text-lg font-bold flex items-center gap-2 mb-4"><Info className="text-primary w-5 h-5" /> Important Tips</h4>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                  <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Use accurate personal details.</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Keep your login information secure.</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Avoid creating multiple accounts.</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Be cautious with any activation or deposit requirements.</li>
                </ul>
              </div>
              <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 mb-8">
                Registering on Mulastar is quick and straightforward. By following the steps above, you can create your account in just a few minutes and begin exploring online earning opportunities.
              </p>
              <a href="https://mulastar.com/register.php?ref=samkiliswa" className="px-10 py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-xl shadow-primary/25 hover:scale-105 transition-transform inline-block">
                Register Now on MulaStar
              </a>
            </div>
          </div>
        </section>

        {/* Login Guide */}
        <section className="py-20 bg-white dark:bg-background-dark/50" id="login-guide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black sm:text-4xl mb-4 uppercase tracking-tight">Login MulaStar</h2>
              <h3 className="text-xl font-bold text-primary mb-4">How to Login Mulastar</h3>
              <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                Logging into your Mulastar account is quick and easy. Follow the steps below to access your dashboard successfully.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold mb-4">✅ Step 1: Visit the Official Mulastar Website</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Open your browser and click the link below:</p>
                <a href="https://mulastar.io" className="text-primary font-bold hover:underline">👉 https://mulastar.co</a>
              </div>
              <div className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold mb-4">✅ Step 2: Click the “Sign In” Button</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">On the homepage, locate and click the “Sign In Mulastar” button. This will take you to the login page.</p>
              </div>
              <div className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold mb-4">✅ Step 3: Enter Your Username</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Type in your Mulastar username exactly as you used when creating your account. ⚠️ Make sure there are no spaces or spelling mistakes.</p>
              </div>
              <div className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold mb-4">✅ Step 4: Enter Your Password</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Carefully enter your password in the password field.</p>
              </div>
              <div className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold mb-4">✅ Step 5: Click “Sign In”</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">After confirming your details are correct, click the “Sign In” button to log into your Mulastar dashboard.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto p-6 bg-primary/5 border border-primary/20 rounded-2xl mb-12">
              <h4 className="text-lg font-bold flex items-center gap-2 mb-4"><ShieldCheck className="text-primary w-5 h-5" /> Login Tips</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
                <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Ensure you are using the correct username, not your email or phone number.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Check your internet connection for smooth access.</li>
                <li className="flex gap-3"><CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> If you forget your password, use the “Forgot Password” option to reset it.</li>
              </ul>
            </div>
            <div className="text-center">
              <a href="https://mulastar.com/register.php?ref=samkiliswa" className="px-10 py-4 bg-primary text-slate-900 font-bold rounded-xl shadow-xl shadow-primary/25 hover:scale-105 transition-transform inline-block">
                Login to MulaStar Now
              </a>
            </div>
          </div>
        </section>

        {/* App Section */}
        <section className="py-20 bg-primary/10" id="app">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-primary font-black text-xl mb-4">MulaStar App</h3>
                <h2 className="text-4xl font-black mb-2">MulaStar App</h2>
                <p className="text-lg font-bold mb-6">How to Download And Install MulaStar App</p>
                <div className="text-left space-y-4 mb-8 text-slate-700 dark:text-slate-300">
                  <p className="font-bold">How to Download & Install MulaStar App</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Visit the official MulaStar website</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Scroll to the bottom and click Download MulaStar App</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Download the APK file</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Enable Install from Unknown Sources in your phone settings</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Install the app and open it</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Register or log in to your account Start watching videos, spinning rewards, inviting friends, and earning money.</li>
                  </ul>
                </div>
                <a 
                  href="https://www.appcreator24.com/app3856918-i5xhm6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mx-auto lg:ml-0 w-fit"
                >
                  <Download className="w-5 h-5" /> Install MulaStar App
                </a>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 w-1/2 h-6 bg-slate-800 left-1/4 rounded-b-xl"></div>
                  <div className="p-4 pt-10">
                    <div className="w-full h-8 bg-slate-700 rounded mb-4"></div>
                    <div className="w-full h-32 bg-primary/20 rounded-xl mb-4"></div>
                    <div className="space-y-2">
                      {[1, 2, 3].map(i => <div key={i} className="w-full h-12 bg-slate-800 rounded"></div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-white dark:bg-background-dark/50" id="reviews">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black sm:text-4xl mb-4">MulaStar Reviews</h2>
              <p className="text-xl font-bold text-primary mb-4">Hear From Our Happy Clients: Their Stories</p>
              <p className="max-w-4xl mx-auto text-slate-600 dark:text-slate-400">
                MulaStar is widely described as an easy-to-use and engaging online earning platform. Users appreciate its simple tasks, multiple earning options, mobile-friendly design, and attractive bonuses, making it a convenient choice for earning extra income online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Emily R.", role: "Marketing Lead", text: "Good for beginners. With simple registration and free learning resources like Forex classes, MulaStar is suitable for newcomers." },
                { name: "Mark T.", role: "Startup Founder", text: "Quick task completion. Most tasks take only a few seconds, which is perfect for people with limited time." },
                { name: "John Doe", role: "Founder", text: "Easy to use and well organized. The dashboard is simple to navigate, and tasks are easy to understand even for new users." },
                { name: "Jason M.", role: "Product Manager", text: "Bonuses add extra value. Free spins, welcome bonuses, and top winners’ rewards make the platform more rewarding." },
                { name: "Lena K.", role: "UX Consultant", text: "Fun ways to earn money. Watching videos, spinning games, and playing online games makes earning enjoyable." },
                { name: "Aliana Lorel", role: "Founder – Lorel Technology", text: "A good platform for extra income. MulaStar provides multiple earning options in one place, allowing users to choose what suits them best." },
                { name: "Sara D.", role: "Freelancer", text: "Mobile-friendly platform. The MulaStar app allows users to earn conveniently from their smartphones." },
                { name: "David V.", role: "IT Director", text: "Great referral commissions. The 55% referral commission makes MulaStar attractive for users who enjoy inviting others." },
                { name: "Peter Brandson", role: "Owner – Brandson Industry", text: "MulaStar makes online earning simple. The platform offers many easy tasks like watching videos and clicking ads, making it beginner-friendly." }
              ].map((review, i) => (
                <div key={i} className="p-8 bg-background-light dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <p className="italic text-slate-600 dark:text-slate-400 mb-6 text-sm">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-xs text-slate-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legitimacy Section */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-8">Is MulaStar Legit?</h2>
            <div className="p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                Yes, MulaStar is a legit online earning platform that provides real opportunities for users to earn money by completing simple digital tasks. The platform operates transparently by allowing users to register, activate their accounts, complete tasks, and track their earnings directly from their dashboard. MulaStar offers multiple earning methods such as watching ads and videos, playing games, writing blogs, referrals, and spin rewards. The presence of welcome bonuses, referral commissions, and top winners rewards further supports its structured earning system. In addition, MulaStar provides support features like free Forex classes for beginners, showing a commitment to user growth and education beyond just task-based earnings. Many users actively engage with the platform daily, which demonstrates its functionality and reliability. Like any online earning platform, results depend on user participation and consistency. However, based on its working features, transparent task system, and active user base, MulaStar is a legitimate platform for earning money online when used correctly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-3xl font-black text-primary">100%</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Payouts</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">24/7</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Support</p>
                </div>
                <div>
                  <ShieldCheck className="w-8 h-8 text-primary mx-auto" />
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Verified</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">Fast</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Withdrawals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      
      {/* WhatsApp FAB */}
      <a 
        href="https://wa.me/254794634552?text=Hello,%20Am%20Interested." 
        target="_blank" 
        className="fixed bottom-5 right-5 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
