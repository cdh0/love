import React, { useState } from 'react';
import { Heart, Share2, RefreshCw, Calculator, Sparkles } from 'lucide-react';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<{
    percentage: number;
    comment: string;
    status: 'high' | 'medium' | 'low' | 'zero';
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) {
      alert('دير الاسمين الأول يا خويا! 💕');
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay for fun
    setTimeout(() => {
      // Generate completely random percentage (0-100)
      const percentage = Math.floor(Math.random() * 101);
      
      let comment = '';
      let status: 'high' | 'medium' | 'low' | 'zero' = 'medium';
      
      if (percentage === 0) {
        comment = 'واه لا! 😱 يبان الكمبيوتر تاه... جرب مرة أخرى! 🤖';
        status = 'zero';
      } else if (percentage <= 25) {
        const lowComments = [
          'مممم... يمكن تحتاجوا وقت باش تتعارفوا مليح! 🤔',
          'ما تيأسش! الحب يحتاج صبر... ولا يمكن تحتاج أسماء أخرين! 😅',
          'نصيحة: جيب لها ورد كثر! 🌹',
          'يمكن راكم أحسن كي صحاب... ولا يمكن لا! 😂',
          'يا خويا... الكمبيوتر يقول "ماشي هكا"! 🤷‍♂️',
          'أوف! النتيجة ضعيفة... بصح ما تزعفش، جرب مع وحدة أخرى! 😜',
          'الحب ماشي بالحسابات... بصح الحسابات تقول لا! 🧮',
          'نصيحة: اشري شوكولاطة وورد وجرب مرة أخرى! 🍫🌹',
          'يمكن راكم أحسن كي جيران من حبايب! 🏠',
          'الكمبيوتر يقول: "خلوكم صحاب أحسن!" 🤝',
          'ماشي مشكلة! البحر فيه حوت بزاف... جرب اسم آخر! 🐟',
          'النتيجة تقول: "دور على واحد آخر!" 🔍',
          'يا ريت كان الحب بالتمني... بصح ماشي هكا! 💭',
          'الكمبيوتر محشوم يقولك النتيجة... بصح لازم! 😳',
          'نصيحة من القلب: جرب تتعلم طبخ الأول! 👨‍🍳'
        ];
        comment = lowComments[Math.floor(Math.random() * lowComments.length)];
        status = 'low';
      } else if (percentage <= 50) {
        const mediumComments = [
          'كاين أمل! 🌟 كملوا الطريق وشوفوا واش راح يصرا!',
          'نص كاس عامر... ولا فارغ؟ 🥤 المهم سعوا للأحسن!',
          'متوسط مليح! مع شوية جهد ممكن توصلوا للقمة! 💪',
          'ماشي بطال! بصح ممكن أحسن... جربوا تشروا شوكولاطة! 🍫',
          'الوضع "أوكي"... ماشي حلو بزاف بصح ماشي خايب! 😐',
          'نتيجة متوسطة... يعني كاين احتمال 50-50! ⚖️',
          'الكمبيوتر يقول: "ممكن ينفع، ممكن لا!" 🤖',
          'نص الطريق مقطوع... الباقي عليكم! 🛤️',
          'ماشي أحسن نتيجة... بصح ماشي أسوأ نتيجة! 🎭',
          'الحب يحتاج خدمة زيادة... يالا شمروا! 💼',
          'نتيجة "عادي"... جربوا تخرجوا مع بعض كثر! 🚶‍♂️🚶‍♀️',
          'الكمبيوتر تاه... بصح يقول "يمكن"! 🤷‍♂️',
          'نصيحة: ديروا أنشطة مشتركة كثر! 🎨',
          'النتيجة تقول: "كاين أمل... بصح شوية!" ✨',
          'متوسط... يعني ماشي حب من أول نظرة! 👀',
          'الوضع يحتاج تطوير... روحوا دورة تنمية بشرية! 📚'
        ];
        comment = mediumComments[Math.floor(Math.random() * mediumComments.length)];
        status = 'medium';
      } else if (percentage <= 75) {
        const goodComments = [
          'واو! 🎉 التوافق عالي! راكم على الطريق الصحيح!',
          'ممتاز! 🌹 هاذي نسبة حلوة بزاف! كملوا هكا!',
          'مبروك! 🎊 الحب يطقطق بيناتكم! كملوا الحلاوة!',
          'رائع! 💕 راكم تتناسبوا مع بعض بزاف!',
          'يا سلام! 🌟 النتيجة حلوة بزاف! الكمبيوتر فرحان!',
          'ممتاز! 🎯 راكم على الطريق الصحيح للسعادة!',
          'حلو بزاف! 💖 الحب واضح بيناتكم!',
          'نتيجة رائعة! 🚀 راكم فريق قوي!',
          'الكمبيوتر يقول: "هاذوما لبعضاهم!" 💑',
          'نسبة عالية! 🎪 خلاص قرروا تخطبوا!',
          'واو! 🌈 التوافق واضح من المريخ!',
          'ممتاز! 🏆 راكم مرشحين لجائزة أحلى كوبل!',
          'حلو! 🍯 الحب حلو بيناتكم كي العسل!',
          'رائع! ⭐ النجوم تقول راكم مناسبين!',
          'يا حلاوة! 🧁 راكم أحلى من الكيك!',
          'نتيجة ممتازة! 🎨 راكم تحفة فنية مع بعض!'
        ];
        comment = goodComments[Math.floor(Math.random() * goodComments.length)];
        status = 'high';
      } else {
        const perfectComments = [
          'مبروك! 🎆 توأم الروح! راكم مخلوقين لبعضاكم!',
          'يا سلام! 🌟 هاذي نسبة خيالية! تزوجوا بسرعة! 💒',
          'مثالي! 💝 الكمبيوتر يقول راكم Perfect Match!',
          'واو! 🚀 نسبة عالية بزاف! راكم محظوظين جداً!',
          'يا ربي! 🔥 هاذي نسبة نار! راكم مثاليين!',
          'خيالي! 🦄 راكم كي الحلم! ما تفوتوش بعضاكم!',
          'مذهل! 💎 راكم أغلى من الماس! حافظوا على بعضاكم!',
          'الكمبيوتر يقول: "هاذوما من الجنة!" 😇',
          'نسبة خرافية! 🐉 راكم أسطورة في عالم الحب!',
          'مثالي! 🎯 راكم الهدف اللي كل واحد يدور عليه!',
          'واو! 🌟 النجوم اتحدت عليكم! راكم مقدرين!',
          'خيالي! 🎪 راكم عرض سيرك... بصح عرض حب!',
          'مذهل! 🏰 راكم قصة خيالية تتحقق!',
          'الكمبيوتر يبكي من الفرحة! 😭💕',
          'نسبة صاروخية! 🚀 راكم رايحين للقمر مع بعضاكم!',
          'مثالي! 🎨 راكم لوحة فنية رسمها الحب!',
          'خرافي! 🌙 راكم أحلى من ضوء القمر!',
          'الكمبيوتر يقول: "خلاص، روحوا ديروا عرس!" 💒'
        ];
        comment = perfectComments[Math.floor(Math.random() * perfectComments.length)];
        status = 'high';
      }

      setResult({ percentage, comment, status });
      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setName1('');
    setName2('');
    setResult(null);
  };

  const shareResult = () => {
    if (result) {
      const message = `💕 نتيجة حاسبة الحب بيناتنا:\n${name1} ❤️ ${name2}\n\nالنسبة: ${result.percentage}%\n\n${result.comment}\n\nجرب انت كمان: ${window.location.href}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return 'text-pink-600';
      case 'medium': return 'text-purple-600';
      case 'low': return 'text-blue-600';
      case 'zero': return 'text-gray-600';
      default: return 'text-purple-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'high': return 'bg-gradient-to-r from-pink-500 to-red-500';
      case 'medium': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'low': return 'bg-gradient-to-r from-blue-500 to-purple-500';
      case 'zero': return 'bg-gradient-to-r from-gray-500 to-gray-600';
      default: return 'bg-gradient-to-r from-purple-500 to-pink-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-red-100 relative overflow-hidden">
      {/* Animated Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Heart
              className={`w-4 h-4 ${Math.random() > 0.5 ? 'text-pink-300' : 'text-red-300'} fill-current opacity-30`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 w-full max-w-md mx-auto border border-pink-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500 fill-current animate-pulse" />
              <Calculator className="w-8 h-8 text-pink-500" />
              <Heart className="w-8 h-8 text-red-500 fill-current animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Love Calculator Max
            </h1>
            <p className="text-gray-600 mt-2">احسب نسبة التوافق العاطفي بيناتكم! 💕</p>
          </div>

          {!result ? (
            <>
              {/* Input Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💖 الاسم الأول
                  </label>
                  <input
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="دير الاسم الأول..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
                  />
                </div>

                <div className="text-center">
                  <Heart className="w-6 h-6 text-red-500 fill-current mx-auto animate-bounce" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    💖 الاسم الثاني
                  </label>
                  <input
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="دير الاسم الثاني..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
                  />
                </div>

                <button
                  onClick={calculateLove}
                  disabled={isCalculating}
                  className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition-all duration-300 transform hover:scale-105 ${
                    isCalculating 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      راني نحسب...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      احسب الحب!
                      <Sparkles className="w-6 h-6" />
                    </div>
                  )}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Result Display */}
              <div className="text-center space-y-6">
                <div className="text-2xl font-bold text-gray-700">
                  {name1} ❤️ {name2}
                </div>

                {/* Percentage Circle */}
                <div className="relative inline-flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full ${getStatusBg(result.status)} flex items-center justify-center shadow-lg`}>
                    <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center">
                      <span className={`text-3xl font-bold ${getStatusColor(result.status)}`}>
                        {result.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Heart className="w-8 h-8 text-red-500 fill-current animate-pulse" />
                  </div>
                </div>

                {/* Comment */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-2 border-pink-200">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {result.comment}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={shareResult}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    شارك النتيجة على الواتساب
                  </button>

                  <button
                    onClick={resetCalculator}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-5 h-5" />
                    احسب مرة أخرى
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>للترفيه برك • Love Calculator Max 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
