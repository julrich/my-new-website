"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { PriceFinder as PriceFinderUiComponent } from "@energyui/design-system/components/PriceFinder";
import { PricefinderStoryblok } from "@/types/components-schema";
import { useEffect } from "react";

type EUIPriceFinderSubmitEvent = {
  element: HTMLElement;
  data: {
    energyType: string;
    zipCode: string;
    consumption: string;
  }
}

type PriceFinderProps = {
  blok: PricefinderStoryblok;
};
export default function PriceFinder({ blok }: PriceFinderProps) {
  const consumptionOptionsElectricity = [
    {
      icon: { icon: "consumption-electricity-1" },
      value: blok.consumption_hints_elelectricity_one_person,
    },
    {
      icon: { icon: "consumption-electricity-2" },
      value: blok.consumption_hints_elelectricity_two_persons,
    },
    {
      icon: { icon: "consumption-electricity-3" },
      value: blok.consumption_hints_elelectricity_three_persons,
    },
    {
      icon: { icon: "consumption-electricity-4" },
      value: blok.consumption_hints_elelectricity_four_persons,
    },
  ];
  const consumptionOptionsGas = [
    {
      icon: { icon: "consumption-gas-1" },
      value: blok.consumption_hints_gas_small,
    },
    {
      icon: { icon: "consumption-gas-2" },
      value: blok.consumption_hints_gas_medium,
    },
    {
      icon: { icon: "consumption-gas-3" },
      value: blok.consumption_hints_gas_large,
    },
    {
      icon: { icon: "consumption-gas-4" },
      value: blok.consumption_hints_gas_huge,
    },
  ];
  const priceFinderProps = {
    types: [
      {
        key: "electricity",
        label: "Strom",
        consumption: { options: consumptionOptionsElectricity },
      },
      {
        key: "gas",
        label: "Gas",
        consumption: { options: consumptionOptionsGas },
      },
    ],
    module: {
      headline: blok.headline,
      text: blok.intro,
    },
  };

  useEffect(() => {
    const priceFinderSubmitListenerHandle = window._ks.radio.on("eui.price-finder.submit", (_: any, { data }: EUIPriceFinderSubmitEvent) => {
      const targetMultiLink = data.energyType === "electricity" ? blok.target_electricity : blok.target_gas
      if (!targetMultiLink) return;

      const targetRawUrl = targetMultiLink.linktype === 'url' ? targetMultiLink.url : `${window.location.origin}/${targetMultiLink.story.url}`
      const targetUrl = new URL(targetRawUrl)

      targetUrl.searchParams.append('zip', data.zipCode)
      targetUrl.searchParams.append('consumption', data.consumption)
      window.location.replace(targetUrl.toString())
    })

    return () => {
      window._ks.radio.off(priceFinderSubmitListenerHandle);
    }
  }, [blok])

  return (
    <div {...storyblokEditable(blok)}>
      {/* @ts-expect-error */}
      <PriceFinderUiComponent {...priceFinderProps} />
    </div>
  );
}
