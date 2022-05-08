import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
 
export default function Accordion() {
  return (
    <div className="w-full pt-4">
      <div className="w-full p-2  bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            // ff3115

            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left bg-[#eeeaea] rounded-lg hover:bg-[#ff3115] focus:bg-[#ff3115] focus:outline-none focus-visible:ring 
              ">
                <span>Our Values</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adientum vel.
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. A
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left bg-[#eeeaea] rounded-lg hover:bg-[#ff3115] focus:bg-[#ff3115] focus:outline-none focus-visible:ring">
                <span>Our Mission</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adientum vel.
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. A
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-sm font-medium text-left bg-[#eeeaea] rounded-lg hover:bg-[#ff3115] focus:bg-[#ff3115] focus:outline-none focus-visible:ring">
                <span>Our Vision</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adientum vel.
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. 
              A Lorem ipsum dolor sit amet, consectetur adientum vel. A
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
