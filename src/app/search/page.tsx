"use client";
import React from "react";
import { MainLayout } from "@/layout/main";
import { SearchSection } from "@/ui/search/search-section";
import { CategorySection } from "@/ui/search/category";
import { SafeAreaSection } from "@/layout/spacing";
import { Flex, FlexColumn } from "@/layout";
import { Result } from "@/ui/search/result";

export default function IndividualStore() {
  return (
    <MainLayout withSearch={false}>
      <SafeAreaSection withSpacing={false}
        classname={[" 2xl:px-desktop 5xl:px-0 py-6 w-full mx-auto 5xl:max-w-screen-5xl 2xl:max-w-screen-2xl"].join(" ")}>
        <FlexColumn className="gap-[30px]">
          <SearchSection />
          <FlexColumn>
            <Flex className="relative">
              <CategorySection />
              <div className="xl:hidden gradient-menu h-full absolute w-10 top-0 right-0" />
            </Flex>
            <Result />
          </FlexColumn>
        </FlexColumn>
      </SafeAreaSection>
    </MainLayout>
  );
}
