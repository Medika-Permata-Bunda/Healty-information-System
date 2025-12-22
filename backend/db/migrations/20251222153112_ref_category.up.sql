
	
	CREATE TABLE IF NOT EXISTS ref_category (
		id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
		name VARCHAR(20) NOT NULL,
		created_at TIMESTAMP NOT NULL DEFAULT NOW(),
		updated_at TIMESTAMP NOT NULL DEFAULT NOW()

		-- write up migration here
	);

	-- Trigger agar updated_at auto-update
	CREATE OR REPLACE FUNCTION update_ref_category_updated_at()
	RETURNS TRIGGER AS $$
	BEGIN
		NEW.updated_at = NOW();
		RETURN NEW;
	END;
	$$ LANGUAGE plpgsql;

	CREATE TRIGGER ref_category_updated_at_trigger
	BEFORE UPDATE ON ref_category
	FOR EACH ROW
	EXECUTE FUNCTION update_ref_category_updated_at();
