import useFetch from '../hooks/useFetch';
import { IoPerson } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SignoutButton from '../components/buttons/SignoutButton';
import UserInfo from '../components/subcomponents/UserInfo';

const Settings = () => {
	const { data, loading } = useFetch('https://api.spotify.com/v1/me');
	const { data: followingData } = useFetch(
		'https://api.spotify.com/v1/me/following?type=artist'
	);
	const [showUserID, setShowUserID] = useState(false);
	const navigate = useNavigate();
	return (
		<section className="p-4">
			<h1 className="heading gradient-text">User Overview</h1>
			{!loading ? (
				<article className="relative flex flex-col w-full gap-4 mt-4 text-additional dark:text-white">
					<UserInfo data={data} />
					<div className="flex items-center justify-center flex-col gap-1">
						<p className="text-xl flex items-center justify-center">
							Followers: {data?.followers?.total} <IoPerson />{' '}
						</p>
						<p
							className="text-xl flex items-center justify-center underline"
							onClick={() => navigate('/following')}
						>
							Following: {followingData?.artists?.total}
							<HiOutlineExternalLink size="30" />
						</p>
					</div>
					<button
						className="rounded-full border-2 border-additional dark:border-white flex items-center mx-auto  text-sm w-fit px-3 py-1"
						onClick={() => {
							setShowUserID(!showUserID);
						}}
					>
						{showUserID ? 'Hide' : 'Show'} User ID
					</button>

					<AnimatePresence>
						{showUserID && (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0, transition: { duration: 0.1 } }}
								className="text-lg p-0 text-center"
							>
								{data?.id}
							</motion.p>
						)}
					</AnimatePresence>
					<SignoutButton />
				</article>
			) : (
				<p>Loading...</p>
			)}
		</section>
	);
};

export default Settings;
