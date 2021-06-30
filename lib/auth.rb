class Auth
    def self.user_id_from_jwt(token)
      claims = decode_token(token)
      claims[:uid] if claims
    end

    def self.create_token(uid)
      current_time_sec = Time.now.to_i
      payload = {
        iat: current_time_sec,
        exp: current_time_sec + 1.week,
        uid: uid
      }
      JWT.encode payload, Rails.application.credentials[:jwt][:secret], 'HS256'
    end

    def self.decode_token(token)
      JWT.decode(
        token,
        Rails.application.credentials[:jwt][:secret],
        {algorithm: 'HS256'}
      ).first.with_indifferent_access rescue nil
    end
end