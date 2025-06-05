-- Enable RLS and add policies for orders table
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their orders" ON public.orders;
DROP POLICY IF EXISTS "Users can insert orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their orders" ON public.orders;

CREATE POLICY "Users can view their orders"
ON public.orders
FOR SELECT
USING (email = auth.jwt() ->> 'email');

CREATE POLICY "Users can insert orders"
ON public.orders
FOR INSERT
WITH CHECK (email = auth.jwt() ->> 'email');

CREATE POLICY "Users can update their orders"
ON public.orders
FOR UPDATE
USING (email = auth.jwt() ->> 'email');

-- Ensure realtime for orders table
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
