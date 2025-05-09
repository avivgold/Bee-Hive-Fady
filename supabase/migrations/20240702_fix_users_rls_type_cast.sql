-- Enable row level security for users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
DROP POLICY IF EXISTS "Users can insert their own data" ON public.users;
DROP POLICY IF EXISTS "Service role can manage all users" ON public.users;

-- Create policies with proper type casting
CREATE POLICY "Users can view their own data"
ON public.users
FOR SELECT
USING (auth.uid() = user_id::uuid);

CREATE POLICY "Users can insert their own data"
ON public.users
FOR INSERT
WITH CHECK (auth.uid() = user_id::uuid);

CREATE POLICY "Service role can manage all users"
ON public.users
USING (auth.role() = 'service_role');

-- Enable realtime
alter publication supabase_realtime add table public.users;