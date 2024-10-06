import React from "react";

//TODO burada config.js kullanılabilir
export default function Pricing() {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Get our app lifetime access
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-warning-content font-semibold border-0 bg-warning`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-warning z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          ${plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={`text-5xl tracking-tight font-extrabold`}>
                    $ {plan.price.toFixed(2)}
                  </p>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check />
                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <CheckoutButton
                    paymentLink={plan.paymentLink}
                    key={plan.priceId}
                  />
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
