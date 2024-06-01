import Image from 'next/image'
import Link from 'next/link'
import {
  FaBook,
  FaClock,
  FaCog,
  FaHistory,
  FaSignOutAlt,
  FaTimes,
  FaTimesCircle,
  FaUser,
} from 'react-icons/fa'

function page() {
  return (
    <main className="flex gap-8 container">
      <section className="w-1/4 flex flex-col gap-8">
        <div className="p-6 flex flex-col gap-1 items-center border border-gray-300 rounded-md">
          <Image
            src="avatar-svgrepo-com.svg"
            width={160}
            height={160}
            alt="avatar"
          />
          <h1 className="text-2xl font-bold text-center text-primary">
            John Doe
          </h1>
          <p className="text-center text-gray-500">anhpnh001@gmail.com</p>
          <p className="text-center text-gray-500">+84 123 456 789</p>
        </div>
        <div className="flex flex-col gap-2 items-center border border-gray-300 rounded-md">
          <h3 className="p-4 text-lg font-bold text-center text-primary">
            Account Settings
          </h3>
          <ul className="w-full">
            <li className="flex p-4 border-t border-gray-300">
              <Link
                href="/profile"
                className="flex items-center text-gray-500"
              >
                <FaUser className="mr-2 text-primary" />
                Edit Profile
              </Link>
            </li>
            <li className="flex p-4 border-t border-gray-300 bg-gray-100">
              <Link
                href="/account-settings"
                className="flex items-center text-gray-500"
              >
                <FaBook className="mr-2 text-primary" />
                My Courses
              </Link>
            </li>
            <li className="flex p-4 border-t border-gray-300">
              <Link
                href="/account-settings"
                className="flex items-center text-gray-500"
              >
                <FaHistory className="mr-2 text-primary" />
                Purchase History
              </Link>
            </li>
            <li className="flex p-4 border-t border-gray-300">
              <Link
                href="/login"
                className="flex items-center text-gray-500"
              >
                <FaSignOutAlt className="mr-2 text-primary" />
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-3/4">
        <div className="flex flex-col border border-gray-300 rounded-md">
          <h3 className="p-4 text-lg font-bold text-primary">Courses</h3>
          <div className="grid grid-cols-2 gap-8 p-8">
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex gap-1 items-center">
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                      <div className="w-1/4 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-end">
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex gap-1 items-center">
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                      <div className="w-1/4 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-end">
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex gap-1 items-center">
                    <div className="w-full h-1 bg-gray-300 rounded-full">
                      <div className="w-1/4 h-full bg-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">25%</span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-end">
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaBook className="mr-2 text-primary" />
                      10 Lessons
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      10 Hours
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-between">
                  <span className="text-gray-500 text-sm">999.000 VND</span>
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaBook className="mr-2 text-primary" />
                      10 Lessons
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      10 Hours
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-between">
                  <span className="text-gray-500 text-sm">999.000 VND</span>
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-md">
              <Image
                src="undraw_educator_re_ju47.svg"
                width={160}
                height={160}
                alt="course"
                className="w-1/3"
              />
              <div className="flex flex-col gap-2 w-2/3 border-l border-gray-300">
                <div className="flex flex-col gap-2 p-2">
                  <h4 className=" font-bold text-primary">Course 1</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaBook className="mr-2 text-primary" />
                      10 Lessons
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaClock className="mr-2 text-primary" />
                      10 Hours
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 p-2 border-t border-gray-300 justify-between">
                  <span className="text-gray-500 text-sm">999.000 VND</span>
                  <Link
                    href="/course"
                    className="text-primary text-sm font-bold"
                  >
                    Enroll No
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
